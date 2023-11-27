import { atom } from 'jotai'

/**
 * Base atoms
 */
const user = atom<string>('')
const step = atom<0 | 1 | 2 | 3>(0)

export const onboardingStore = {
    user,
    step,
}
