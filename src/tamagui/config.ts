import { createAnimations } from '@tamagui/animations-react-native'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { createTamagui } from 'tamagui'

import { themes } from './theme'
import customToken from './tokens'
const animations = createAnimations({
    bouncy: {
        type: 'spring',
        damping: 10,
        mass: 0.9,
        stiffness: 100,
    },
    lazy: {
        type: 'spring',
        damping: 20,
        stiffness: 60,
    },
    quick: {
        type: 'spring',
        damping: 100,
        mass: 1.2,
        stiffness: 250,
    },
})
const headingFont = createInterFont()
const bodyFont = createInterFont()
const config = createTamagui({
    animations,
    defaultTheme: 'dark',
    shouldAddPrefersColorThemes: false,
    themeClassNameOnRoot: false,
    shorthands,
    fonts: {
        heading: headingFont,
        body: bodyFont,
    },
    themes: themes,
    tokens: customToken,
})
export type AppConfig = typeof config
declare module 'tamagui' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface TamaguiCustomConfig extends AppConfig {}
}
export default config
