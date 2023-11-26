import useToggleTheme from '@src/hooks/useToggleTheme'
import { Stack } from 'expo-router'
import { memo } from 'react'
import { YStack } from 'tamagui'

import { ScreenTemplateProps } from './ScreenTemplate.types'

function ScreenTemplate({ title, children }: ScreenTemplateProps) {
    const { theme } = useToggleTheme()
    return (
        <>
            <Stack.Screen
                options={{
                    title,
                }}
            />
            <YStack f={1} theme={theme} jc="center" ai="center" backgroundColor="$bg">
                {children}
            </YStack>
        </>
    )
}

export default memo(ScreenTemplate)
