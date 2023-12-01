import { firebaseApp } from '@src/common/adapter/firebase.adapter'
import { storage } from '@src/common/adapter/storage.adapter'
import { UserStorage } from '@src/data/storage/user.storage'
import { AuthService } from '@src/service/auth/auth.service'
import { authStore } from '@src/store/auth.atom'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useCallback, useEffect } from 'react'

import { useOnlineManager } from './useOnlineManage'

export function useAuth() {
    const { auth } = firebaseApp
    const [user, setUser] = useAtom(authStore.authUserAtom)
    const isAuthenticated = useAtomValue(authStore.isAuthenticatedAtom)
    const isLoadingAuth = useAtomValue(authStore.isLoadingAuthAtom)
    const { isConnected } = useOnlineManager()

    const startLogin = useSetAtom(authStore.startLoginAtom)
    const finishLogin = useSetAtom(authStore.finishLoginAtom)

    const login = useCallback(
        async ({ email, password }: { email: string; password: string }) => {
            startLogin()

            try {
                const result = await AuthService.signIn({ email, password })
                if (!result) {
                    throw new Error('')
                }
                finishLogin(result)
                storage.storeData('user', JSON.stringify(result))
            } catch (err) {
                finishLogin(null)
                throw err
            }
        },
        [finishLogin, startLogin]
    )

    const signOut = useCallback(async () => {
        AuthService.signOutFunc()
            .then(() => {
                storage.deleteData('user')
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setUser])

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                storage.storeData('user', JSON.stringify(user))
                setUser(user)
            }
        })
    }, [user, auth, setUser])

    const restoreSession = useCallback(async () => {
        if (isConnected) {
            const user = auth.currentUser
            if (user) {
                storage.storeData('user', JSON.stringify(user))
                setUser(user)
            }
        } else {
            const user = await UserStorage.getUserFromStorage()
            setUser(user)
        }
    }, [setUser, isConnected, auth])

    return { user, isAuthenticated, isLoadingAuth, login, signOut, restoreSession }
}
