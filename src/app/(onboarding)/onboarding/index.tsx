import useToggleTheme from '@src/hooks/useToggleTheme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, YStack } from 'tamagui'

export default function OnBarding() {
    const { theme } = useToggleTheme()
    const { t } = useTranslation('onboarding')
    return (
        <YStack ai="center" jc="center" theme={theme} fullscreen backgroundColor="$bg">
            <Text>{t('welcome.greeting', { name: 'Poliane' })}</Text>
        </YStack>
    )
}
