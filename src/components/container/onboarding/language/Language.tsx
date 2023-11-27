import { Feather } from '@expo/vector-icons'
import BrazilIcon from '@src/components/icons/BrazilIcon'
import SpainIcon from '@src/components/icons/SpainIcon'
import USAIcon from '@src/components/icons/USAIcon'
import { Button } from '@src/components/primitives/button'
import useLanguage from '@src/hooks/useLanguageChange'
import { onboardingStore } from '@src/store/onboarding.atom'
import { useSetAtom } from 'jotai'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, YStack, XStack } from 'tamagui'

export default function LanguagePage() {
    const [lang, setLang] = useState<'ptBR' | 'enUS' | 'es'>('ptBR')
    const step = useSetAtom(onboardingStore.step)
    const { setCurrentLanguage } = useLanguage()
    const { t } = useTranslation('onboarding')
    const onContinue = () => {
        step(1)
        setCurrentLanguage(lang)
    }
    return (
        <YStack jc="center" gap="$2" p="$4" h="70%">
            <YStack gap="$4" my="auto">
                <XStack
                    ai="center"
                    borderWidth={1}
                    px="$4"
                    py="$2"
                    gap="$4"
                    borderColor={lang === 'enUS' ? '$primary600' : '$gray8Light'}
                    bg="$transparent"
                    borderRadius={8}
                    opacity={lang === 'enUS' ? 1 : 0.5}
                    pressStyle={{ bg: '$primary100' }}
                    onPress={() => setLang('enUS')}>
                    <USAIcon width={48} height={48} />
                    <Text fontWeight="500" fontSize={18}>
                        {t('language.options.en')}
                    </Text>
                    <Text ml="auto" color="$primary800">
                        {lang === 'enUS' && <Feather name="check-square" size={24} />}
                    </Text>
                </XStack>
                <XStack
                    ai="center"
                    borderWidth={1}
                    px="$4"
                    py="$2"
                    gap="$4"
                    borderColor={lang === 'ptBR' ? '$primary600' : '$gray8Light'}
                    bg="$transparent"
                    borderRadius={8}
                    opacity={lang === 'ptBR' ? 1 : 0.5}
                    pressStyle={{ bg: '$primary100' }}
                    onPress={() => setLang('ptBR')}>
                    <BrazilIcon width={48} height={48} />
                    <Text fontWeight="500" fontSize={18}>
                        {t('language.options.pt')}
                    </Text>
                    <Text ml="auto" color="$primary800">
                        {lang === 'ptBR' && <Feather name="check-square" size={24} />}
                    </Text>
                </XStack>
                <XStack
                    ai="center"
                    borderWidth={1}
                    px="$4"
                    py="$2"
                    gap="$4"
                    borderColor={lang === 'es' ? '$primary600' : '$gray8Light'}
                    bg="$transparent"
                    borderRadius={8}
                    opacity={lang === 'es' ? 1 : 0.5}
                    pressStyle={{ bg: '$primary100' }}
                    onPress={() => setLang('es')}>
                    <SpainIcon width={48} height={48} />
                    <Text fontWeight="500" fontSize={18}>
                        {t('language.options.esp')}
                    </Text>
                    <Text ml="auto" color="$primary800">
                        {lang === 'es' && <Feather name="check-square" size={24} />}
                    </Text>
                </XStack>
            </YStack>
            <Button variant="primary" mt="auto" onPress={onContinue}>
                <Button.Text>Continuar</Button.Text>
            </Button>
        </YStack>
    )
}
