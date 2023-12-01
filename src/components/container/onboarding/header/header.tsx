import React from 'react'
import { Circle, YStack } from 'tamagui'

export default function OnboardingHeader({ children }: { children: React.ReactNode }) {
    return (
        <YStack h="30%" backgroundColor="$primary950" jc="center" padding="$4" overflow="hidden">
            <Circle position="absolute" size={600} backgroundColor="$primary900" opacity={0.5} top={-300} left={-300} />
            <Circle position="absolute" size={400} backgroundColor="$primary800" top={-200} left={-200} />
            {children}
        </YStack>
    )
}
