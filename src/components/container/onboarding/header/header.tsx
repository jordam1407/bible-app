import React from 'react'
import { useTranslation } from 'react-i18next'
import { Circle, H5, YStack } from 'tamagui'

export default function OnboardingHeader() {
    const { t } = useTranslation('onboarding')
    return (
        <YStack h="30%" backgroundColor="$primary950" padding="$4" jc="center" overflow="hidden">
            <Circle position="absolute" size={600} backgroundColor="$primary900" top={-300} left={-300} />
            <Circle position="absolute" size={400} backgroundColor="$primary800" top={-200} left={-200} />
            <H5 fontSize={28} fontWeight="800" color="white" backgroundColor={'$colorTransparent'}>
                {t('language.title')}
            </H5>
        </YStack>
    )
}
