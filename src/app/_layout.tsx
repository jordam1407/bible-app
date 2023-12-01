/* eslint-disable no-console */
import { persister, queryClient } from '@src/common/config/query-client.config'
import '@src/common/i18n'
import { ThemeProvider } from '@src/components/ThemeProvider'
import { useAuth } from '@src/hooks/useAuth'
import useOnboardManager from '@src/hooks/useOnboardManager'
import { useOnlineManager } from '@src/hooks/useOnlineManage'
import { useProtectedRoute } from '@src/hooks/useProtectedRoute'
import { appStore } from '@src/store/app.atoms'
// import { focusManager } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { useFonts } from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { useAtom } from 'jotai'
import { Suspense, useCallback, useEffect } from 'react'
// import { AppStateStatus, Platform } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

// function onAppStateChange(status: AppStateStatus) {
//     if (Platform.OS !== 'web') {
//         focusManager.setFocused(status === 'active')
//     }
// }

export default function App() {
    return (
        <AppRoot>
            <MainScreen />
        </AppRoot>
    )
}

function AppRoot({ children }: { children: React.ReactNode }) {
    const [isAppReady, setAppIsReady] = useAtom(appStore.isAppReady)
    const { restoreSession, isAuthenticated } = useAuth()
    const { isConnected } = useOnlineManager()
    const [fontsLoaded] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    })

    useEffect(() => {
        async function prepare() {
            try {
                if (!isAuthenticated) {
                    await restoreSession()
                }
            } catch (e) {
                console.warn(e)
            } finally {
                if (fontsLoaded) setAppIsReady(true)
                // Tell the application to render
            }
        }

        prepare()
    }, [setAppIsReady, fontsLoaded, restoreSession, isAuthenticated])

    const onLayoutRootView = useCallback(async () => {
        if (isAppReady) {
            await SplashScreen.hideAsync()
        }
    }, [isAppReady])

    if (!isAppReady) {
        return null
    }

    // if (isAppReady) {
    //     return <Splash />
    // }

    return (
        <PersistQueryClientProvider
            onSuccess={() => {
                if (isConnected) {
                    queryClient.resumePausedMutations().then(() => {
                        queryClient.invalidateQueries()
                    })
                }
            }}
            persistOptions={{ persister }}
            client={queryClient}>
            <ThemeProvider>
                <Suspense>
                    <SafeAreaProvider>
                        <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
                            {isAppReady && children}
                        </SafeAreaView>
                    </SafeAreaProvider>
                </Suspense>
            </ThemeProvider>
        </PersistQueryClientProvider>
    )
}

function MainScreen() {
    useProtectedRoute()
    useOnboardManager()
    return (
        <>
            <Slot />
        </>
    )
}
