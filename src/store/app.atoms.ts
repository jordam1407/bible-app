import { atom } from 'jotai'

/**
 * Base atoms
 */
const isAppReady = atom<boolean>(false)
const isNetConnected = atom<boolean>(true)

export const appStore = {
    isAppReady,
    isNetConnected,
}
