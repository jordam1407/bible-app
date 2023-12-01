import LanguagePage from '@src/components/container/onboarding/language/Language'
import Slider from '@src/components/container/onboarding/slide/Slider'
import { onboardingStore } from '@src/store/onboarding.atom'
import { useAtomValue } from 'jotai'
import React from 'react'
import { YStack } from 'tamagui'

export default function OnboardingPage() {
    const step = useAtomValue(onboardingStore.step)
    return (
        <YStack h="100%" bg="$bg">
            {step === 0 && <LanguagePage />}
            {step === 1 && <Slider />}
        </YStack>
    )
}
