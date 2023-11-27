import OnboardingHeader from '@src/components/container/onboarding/header/header'
import LanguagePage from '@src/components/container/onboarding/language/Language'
import React from 'react'
import { YStack } from 'tamagui'

export default function OnboardingPage() {
    return (
        <YStack fullscreen bg="$bg">
            <OnboardingHeader />
            <LanguagePage />
        </YStack>
    )
}
