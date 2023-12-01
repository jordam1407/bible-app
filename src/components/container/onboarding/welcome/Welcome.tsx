import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from '@src/components/primitives/button'
import useDisclosure from '@src/hooks/useDisclosure'
import { onboardingStore } from '@src/store/onboarding.atom'
import { useSetAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatePresence, Stack, Text, XStack, YStack } from 'tamagui'

export default function Welcome() {
    const insets = useSafeAreaInsets()
    const { width, height } = useWindowDimensions()
    const step = useSetAtom(onboardingStore.step)
    const { t } = useTranslation('onboarding')

    const [isOpened, { toggle }] = useDisclosure()
    const [openAnim, setOpenAnim] = useState(true)
    useEffect(() => {
        const toggleTimer = setTimeout(() => {
            toggle() // Toggle after 1 second
        }, 500)

        return () => {
            clearTimeout(toggleTimer)
        }
    }, [toggle, isOpened])

    useEffect(() => {
        const closeTimer = setTimeout(() => {
            setOpenAnim(false) // Close after 5 seconds
        }, 5000)

        return () => {
            clearTimeout(closeTimer)
        }
    }, [setOpenAnim])

    return (
        <YStack
            height={height - insets.top}
            p="$4"
            w={width}
            position="relative"
            onTouchMove={() => setOpenAnim(false)}>
            <AnimatePresence>
                {isOpened && openAnim && (
                    <>
                        <Stack
                            position="absolute"
                            bottom={10}
                            left={width / 2}
                            zIndex={100}
                            animation="bouncy"
                            enterStyle={{
                                x: 0,
                                rotate: '0deg',
                            }}
                            exitStyle={{
                                x: -82,
                                rotate: '-10deg',
                            }}>
                            <MaterialCommunityIcons name="gesture-swipe-left" size={64} color="black" />
                        </Stack>
                    </>
                )}
            </AnimatePresence>
            <Button size="$2" circular onPress={() => step(0)} bg="$gray12Dark">
                <Feather
                    name="chevron-left"
                    size={18}
                    style={{
                        backgroundColor: 'transparent',
                        color: '#000000',
                    }}
                />
            </Button>
            <YStack py="$4" gap="$8" h="100%">
                <YStack gap="$2">
                    <Text fontSize={36} fontWeight="600" color="$textPrimary70">
                        {t('screen_1.title')}
                    </Text>
                    <Text fontSize={14} color="$textPrimary40">
                        {t('screen_1.description')}
                    </Text>
                </YStack>
                <XStack borderRadius={8} h={500} mt="auto" w="100%" bg="$gray8Light" />
            </YStack>
        </YStack>
    )
}
