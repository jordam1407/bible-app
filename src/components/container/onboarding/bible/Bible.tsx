import { Button } from '@src/components/primitives/button'
import { onboardingStore } from '@src/store/onboarding.atom'
import { useSetAtom } from 'jotai'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useWindowDimensions } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'

export default function Bible() {
    const setOnboarded = useSetAtom(onboardingStore.onboarded)

    const { width } = useWindowDimensions()
    const { t } = useTranslation('onboarding')
    return (
        <YStack height="100%" p="$4" gap="$4" w={width} position="relative">
            <Text fontSize={36} fontWeight="600" color="$textPrimary70">
                {t('screen_3.title')}
            </Text>
            <YStack jc="center" my="auto" h="100%" gap="$8">
                <XStack ai="center" gap="$2" w={width}>
                    <YStack h={150} w={150} bg="$primary900" borderRadius={8} />
                    <Text w="50%" color="$textPrimary40" fontWeight="600" fontSize={16}>
                        {t('screen_3.description3')}
                    </Text>
                </XStack>
                <XStack ai="center" gap="$2" w={width}>
                    <Text w="50%" color="$textPrimary40" fontWeight="600" fontSize={16}>
                        {t('screen_3.description2')}
                    </Text>
                    <YStack h={150} w={150} bg="$primary800" borderRadius={8} />
                </XStack>
            </YStack>
            <Button mt="auto" variant="primary" onPress={() => setOnboarded('onboarded')}>
                <Button.Text>Continuar</Button.Text>
            </Button>
        </YStack>
    )
}
