import { FlashList } from '@shopify/flash-list'
import useToggleTheme from '@src/hooks/useToggleTheme'
import useTracker from '@src/hooks/useTracker'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { XStack, Text, Square, YStack } from 'tamagui'

export default function GraphSection() {
    const { theme } = useToggleTheme()
    const { isLoading, tracker, refetch } = useTracker()
    const { t } = useTranslation('common')
    if (!tracker) return null
    return (
        <YStack theme={theme} borderColor="$border" padding="$2" borderRadius={8} ai="center" borderWidth={1} gap="$2">
            <XStack jc="center" gap={4}>
                <FlashList
                    data={tracker}
                    horizontal
                    snapToEnd
                    initialScrollIndex={6}
                    estimatedItemSize={138}
                    renderItem={({ item }) => (
                        <>
                            <YStack ai="center" h={14 * 7 + 4 * 7} flexWrap="wrap" gap={4} mr={4}>
                                {item.map((i, index) => (
                                    <Square
                                        key={index}
                                        borderRadius="$1"
                                        borderWidth="1"
                                        borderColor={i.read ? `$square${i.read.length}0` : '$border'}
                                        bg={i.read ? `$square${i.read.length}0` : '$squareBg'}
                                        w={14}
                                        h={14}
                                        pressStyle={{ bg: '$blue4Dark' }}
                                    />
                                ))}
                            </YStack>
                        </>
                    )}
                />
            </XStack>
            <XStack gap={4} ai="center" w="100%">
                <YStack mr="auto">
                    <Text fontSize={10} color="$textPrimary70" fontWeight="500">
                        Mais lido: Gênesis
                    </Text>
                    <Text fontSize={10} color="$textPrimary70" fontWeight="500">
                        Mais notas: Apocalipse
                    </Text>
                </YStack>
                <Text>{t('less')}</Text>
                {Array.from({ length: 5 }, (_, i) => (
                    <Square
                        key={i}
                        borderRadius="$1"
                        borderWidth="1"
                        borderColor={`$square${i + 1}0`}
                        bg={`$square${i + 1}0`}
                        w={14}
                        h={14}
                        pressStyle={{ bg: '$blue4Dark' }}
                    />
                ))}
                <Text>{t('more')}</Text>
            </XStack>
        </YStack>
    )
}
