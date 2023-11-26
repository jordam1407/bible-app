import { atom } from 'jotai'

/**
 * Base atoms
 */
const user = atom<string>('')
const language = atom<'portugues' | 'english' | 'spanish'>('portugues')
const theme = atom<'dark' | 'light'>('dark')

export const authStore = {
    user,
    language,
    theme,
}
