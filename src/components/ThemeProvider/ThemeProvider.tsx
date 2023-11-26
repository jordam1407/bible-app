import { authStore } from '@src/store/auth.atom'
import config from '@src/tamagui/config'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { useAtomValue } from 'jotai'
import { TamaguiProvider, Theme } from 'tamagui'

import { ToastController } from '../feedback/ToastController/ToastController'
import { ThemeProviderProps } from './ThemeProvider.types'
function ThemeProvider({ children }: ThemeProviderProps) {
    const theme = useAtomValue(authStore.theme)
    return (
        <TamaguiProvider config={config}>
            <Theme name={theme}>
                <ToastProvider>
                    <ToastController />
                    <ToastViewport top={2} left={0} right={0} />
                    {children}
                </ToastProvider>
            </Theme>
        </TamaguiProvider>
    )
}

export default ThemeProvider
