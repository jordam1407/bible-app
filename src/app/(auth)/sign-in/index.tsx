import { firebaseApp } from '@src/common/adapter/firebase.adapter'
import LoginModal from '@src/components/container/auth/components/LoginModal'
import { Button } from '@src/components/primitives/button'
import { useModal } from '@src/hooks/useModal'
import GraphSection from '@src/modules/home/GraphSection/GraphSection'
import { authStore } from '@src/store/auth.atom'
import { modalStore } from '@src/store/modal.atoms'
import { useSetAtom } from 'jotai'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'

export default function AuthPage() {
    const { auth } = firebaseApp

    const { open } = useModal(modalStore.loginAtom)
    const { t } = useTranslation('common')
    const { t: t2 } = useTranslation('onboarding')
    const setUser = useSetAtom(authStore.user)
    return (
        <>
            <YStack fullscreen ai="center" jc="center">
                <YStack jc="center" w="100%" px="$4" gap="$4" h="80%">
                    <XStack mx="auto">
                        <Image source={require('@assets/bible.png')} style={{ width: 150, height: 150 }} />
                    </XStack>
                    <Text color="$textPrimary70" fontWeight="500" fontSize={32} textAlign="center">
                        {t2('auth.title')}
                    </Text>
                    <Text fontSize={18} textAlign="center" color="$textPrimary40" fontWeight="300">
                        {t2('auth.description')}
                    </Text>
                    <GraphSection />
                    <Text fontSize={20} textAlign="center" color="$textPrimary40" fontWeight="500">
                        JO 3:16
                    </Text>
                </YStack>
                <YStack ai="center" jc="center" w="100%" px="$4" gap="$4" h="20%" mt="auto">
                    <Button onPress={open}>
                        <Button.Text>{t('signUp')}</Button.Text>
                    </Button>
                    <Button variant="outlined" onPress={() => setUser('jordam')}>
                        <Button.Text color="$textPrimary70">{t('signIn')}</Button.Text>
                    </Button>
                </YStack>
            </YStack>
            <LoginModal />
        </>
    )
}
