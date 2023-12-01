import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Button } from '@src/components/primitives/button'
import useLanguage from '@src/hooks/useLanguageChange'
import { onboardingStore } from '@src/store/onboarding.atom'
import { useSetAtom } from 'jotai'
import React from 'react'
import { Image } from 'react-native'
import { H5, Stack, Text, XStack, YStack } from 'tamagui'

import OnboardingHeader from '../header/header'

export default function LanguagePage() {
    const step = useSetAtom(onboardingStore.step)
    const { setCurrentLanguage, currentLanguage } = useLanguage()
    const onContinue = () => {
        step(1)
    }
    return (
        <>
            <OnboardingHeader>
                <Stack my="auto" gap="$2">
                    <MaterialIcons name="translate" size={88} color="white" />
                    <H5 fontSize={28} fontWeight="800" color="white" mt="auto" backgroundColor={'$colorTransparent'}>
                        Selecione seu idioma favorito
                    </H5>
                </Stack>
            </OnboardingHeader>
            <YStack jc="center" h="70%" gap="$2" p="$4" animation="bouncy">
                <YStack gap="$4" my="auto">
                    <XStack
                        ai="center"
                        borderWidth={1}
                        px="$4"
                        py="$2"
                        gap="$4"
                        borderColor={currentLanguage === 'enUS' ? '$primary600' : '$gray8Light'}
                        bg="$transparent"
                        borderRadius={8}
                        opacity={currentLanguage === 'enUS' ? 1 : 0.5}
                        pressStyle={{ bg: '$primary100' }}
                        onPress={() => setCurrentLanguage('enUS')}>
                        <Image style={{ width: 36, height: 36 }} source={require('@assets/flag-usa.png')} />
                        <Text fontWeight="500" fontSize={18}>
                            Inglês
                        </Text>
                        <Text ml="auto" color="$primary800">
                            {currentLanguage === 'enUS' && <Feather name="check-square" size={24} />}
                        </Text>
                    </XStack>
                    <XStack
                        ai="center"
                        borderWidth={1}
                        px="$4"
                        py="$2"
                        gap="$4"
                        borderColor={currentLanguage === 'ptBR' ? '$primary600' : '$gray8Light'}
                        bg="$transparent"
                        borderRadius={8}
                        opacity={currentLanguage === 'ptBR' ? 1 : 0.5}
                        pressStyle={{ bg: '$primary100' }}
                        onPress={() => setCurrentLanguage('ptBR')}>
                        <Image style={{ width: 36, height: 36 }} source={require('@assets/flag-brazil.png')} />
                        <Text fontWeight="500" fontSize={18}>
                            Português
                        </Text>
                        <Text ml="auto" color="$primary800">
                            {currentLanguage === 'ptBR' && <Feather name="check-square" size={24} />}
                        </Text>
                    </XStack>
                    <XStack
                        ai="center"
                        borderWidth={1}
                        px="$4"
                        py="$2"
                        gap="$4"
                        borderColor={currentLanguage === 'es' ? '$primary600' : '$gray8Light'}
                        bg="$transparent"
                        borderRadius={8}
                        opacity={currentLanguage === 'es' ? 1 : 0.5}
                        pressStyle={{ bg: '$primary100' }}
                        onPress={() => setCurrentLanguage('es')}>
                        <Image style={{ width: 36, height: 36 }} source={require('@assets/flag-spain.png')} />
                        <Text fontWeight="500" fontSize={18}>
                            Espanhol
                        </Text>
                        <Text ml="auto" color="$primary800">
                            {currentLanguage === 'es' && <Feather name="check-square" size={24} />}
                        </Text>
                    </XStack>
                </YStack>
                <Button mt="auto" variant="primary" onPress={onContinue}>
                    <Button.Text>Continuar</Button.Text>
                </Button>
            </YStack>
        </>
    )
}
