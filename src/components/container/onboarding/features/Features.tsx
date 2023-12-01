import React from 'react'
import { useTranslation } from 'react-i18next'
import { useWindowDimensions } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'

export default function Features() {
    const { width } = useWindowDimensions()
    const { t } = useTranslation('onboarding')
    return (
        <YStack height="100%" p="$4" gap="$4" w={width} position="relative">
            <Text fontSize={36} fontWeight="600" color="$textPrimary70">
                {t('screen_2.title')}
            </Text>
            <YStack jc="center" my="auto" h="100%" gap="$8">
                <XStack ai="center" gap="$2" w={width}>
                    <YStack h={150} w={150} bg="$primary900" borderRadius={8} />
                    <Text w="50%" color="$textPrimary40" fontWeight="600" fontSize={16}>
                        {t('screen_2.description3')}
                    </Text>
                </XStack>
                <XStack ai="center" gap="$2" w={width}>
                    <Text w="50%" color="$textPrimary40" fontWeight="600" fontSize={16}>
                        {t('screen_2.description2')}
                    </Text>
                    <YStack h={150} w={150} bg="$primary800" borderRadius={8} />
                </XStack>
                <XStack ai="center" gap="$2" w={width}>
                    <YStack h={150} w={150} bg="$primary700" borderRadius={8} />
                    <Text w="50%" color="$textPrimary40" fontWeight="600" fontSize={16}>
                        {t('screen_2.description1')}
                    </Text>
                </XStack>
            </YStack>
        </YStack>
    )
}
