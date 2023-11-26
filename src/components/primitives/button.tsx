import { styled, Text, withStaticProperties } from '@tamagui/core'
import { Button as TButton } from 'tamagui'

const ButtonFrame = styled(TButton, {
    flexDirection: 'row',
    backgroundColor: '$primary700',
    pressStyle: {
        opacity: 0.8,
    },
    borderRadius: 8,
    width: '100%',
    jc: 'center',
    variants: {
        variant: {
            primary: {
                backgroundColor: '$primary700',
            },
            asText: {
                backgroundColor: '$transparent',
            },
            outlined: {
                backgroundColor: '$transparent',
                borderColor: '$primary700',
                borderWidth: 1,
            },
        },
    },
})

const ButtonText = styled(Text, {
    name: 'ButtonText',
    color: '$gray1Light',
    fontFamily: '$body',
    fontSize: 16,
    userSelect: 'none',
    variants: {
        variant: {
            outlined: {
                color: '$primary700',
            },
        },
    },
})

export const Button = withStaticProperties(ButtonFrame, {
    Text: ButtonText,
})
