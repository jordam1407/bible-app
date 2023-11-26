import NetInfo from '@react-native-community/netinfo'
import { appStore } from '@src/store/app.atoms'
import { onlineManager } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { Platform } from 'react-native'


export function useOnlineManager() {
    const [isConnected, setIsConnected] = useAtom(appStore.isNetConnected)

    useEffect(() => {
        if (Platform.OS !== 'web') {
            return NetInfo.addEventListener((state) => {
                const value = state.isConnected != null && state.isConnected && Boolean(state.isInternetReachable)
                setIsConnected(value)
                onlineManager.setOnline(value)
            })
        }
    }, [setIsConnected])

    return { isConnected }
}
