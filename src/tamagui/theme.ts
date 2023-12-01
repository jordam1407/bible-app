import { createAnimations } from '@tamagui/animations-react-native'
import customToken from './tokens'

export const themes = {
    light: {
        bg: customToken.color.bgLight,
        color: customToken.color.textPrimary100,
        colorAlt: customToken.color.textPrimary70,
        primary: customToken.color.primary700,
        overlay: customToken.color.backdrop,
        border: customToken.color.gray7Light,
        squareBg: customToken.color.gray2Light,
        primaryBorder: 'rgba(197, 11, 52, .3)',
        square10: 'rgba(197, 11, 52, .1)',
        square20: 'rgba(197, 11, 52, .3)',
        square30: 'rgba(197, 11, 52, .5)',
        square40: 'rgba(197, 11, 52, .7)',
        square50: 'rgba(197, 11, 52, .9)',
    },

    dark: {
        bg: customToken.color.bgDark,
        color: customToken.color.gray1Light,
        colorAlt: customToken.color.gray4Light,
        primary: customToken.color.primary700,
        overlay: customToken.color.backdrop,
        border: customToken.color.gray3Dark,
        squareBg: customToken.color.gray4Dark,
        primaryBorder: 'rgba(197, 11, 52, .4)',
        square10: 'rgba(197, 11, 52, .2)',
        square20: 'rgba(197, 11, 52, .4)',
        square30: 'rgba(197, 11, 52, .6)',
        square40: 'rgba(197, 11, 52, .8)',
        square50: 'rgba(197, 11, 52, 1)',
    },

    // define a Button sub-theme, see the Themes docs for more
    light_Button: {
        background: '#ccc',
        backgroundPress: '#bbb', // darker background on press
        backgroundHover: '#ddd', // lighter background on hover
        color: '#222',
    },
}

export const animations = createAnimations({
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
