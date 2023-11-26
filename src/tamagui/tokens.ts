import { tokens } from '@tamagui/themes'
import { createTokens } from 'tamagui'

const customToken = createTokens({
    ...tokens,
    color: {
        ...tokens.color,
        bgLight: '#F7F7F7',
        bgDark: '#040D12',
        textPrimary100: '#000000',
        textPrimary70: 'rgba(0,0,0,.7)',
        textPrimary40: 'rgba(0,0,0,.4)',
        textSecondary: '#323755',
        backdrop: 'rgba(0,0,0,.5)',
        transparent: 'rgba(0,0,0,.0)',
        primary50: '#fff0f2',
        primary100: '#ffe3e4',
        primary200: '#ffcbd1',
        primary300: '#ffa0aa',
        primary400: '#ff6b7e',
        primary500: '#fb3855',
        primary600: '#dc143c',
        primary700: '#c50b34',
        primary800: '#a50c33',
        primary900: '#8d0e33',
        primary950: '#4f0217',
    },
})

export default customToken
