import { authStore } from '@src/store/auth.atom'
import { useAtom } from 'jotai'
import { useCallback } from 'react'

export default function useToggleTheme() {
    const [theme, setTheme] = useAtom(authStore.theme)

    const toggle = useCallback(() => {
        if (theme === 'dark') setTheme('light')
        if (theme === 'light') setTheme('dark')
    }, [setTheme, theme])

    return { theme, toggle }
}
