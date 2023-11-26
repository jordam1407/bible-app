import { FlashList } from '@shopify/flash-list'
import useToggleTheme from '@src/hooks/useToggleTheme'
import useTracker from '@src/hooks/useTracker'
import React from 'react'
import { XStack, Text, Square, YStack } from 'tamagui'

export default function GraphSection() {
    const { theme } = useToggleTheme()
    const { isLoading, tracker, refetch } = useTracker()
    if (!tracker) return null
    return (
        <YStack theme={theme} borderColor="$border" padding="$2" borderRadius={8} ai="center" borderWidth={1}>
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
            <XStack gap={4} ai="center" ml="auto">
                <Text>Less</Text>
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
                <Text>More</Text>
            </XStack>
        </YStack>
    )
}
