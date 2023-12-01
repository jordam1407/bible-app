import { User } from 'firebase/auth'
import { atom } from 'jotai'

/**
 * Base atoms
 */
const user = atom<string>('')
const language = atom<'portugues' | 'english' | 'spanish'>('portugues')
const theme = atom<'dark' | 'light'>('light')
const authUserAtom = atom<User | null>(null)
const isLoadingAuthAtom = atom<boolean>(false)

/**
 * Derived atoms
 */
const isAuthenticatedAtom = atom((get) => !!get(authUserAtom))

const startLoginAtom = atom(null, (_, set) => {
    set(isLoadingAuthAtom, true)
    set(authUserAtom, null)
})
const finishLoginAtom = atom(null, (_, set, user: User | null) => {
    set(isLoadingAuthAtom, false)
    set(authUserAtom, user)
})

export const authStore = {
    user,
    language,
    theme,
    isAuthenticatedAtom,
    startLoginAtom,
    finishLoginAtom,
    isLoadingAuthAtom,
    authUserAtom,
}
