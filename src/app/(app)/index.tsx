import { firebaseApp } from '@src/common/adapter/firebase.adapter'
import i18n from '@src/common/i18n'
import { ScreenTemplate } from '@src/components/template/ScreenTemplate'
import { useAuth } from '@src/hooks/useAuth'
// import useToggleTheme from '@src/hooks/useToggleTheme'
import GraphSection from '@src/modules/home/GraphSection/GraphSection'
// import { useToastController } from '@tamagui/toast'
import { Stack } from 'expo-router'
import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, YStack } from 'tamagui'

export default function App() {
    // const toast = useToastController()
    // const { toggle, theme } = useToggleTheme()
    const [data, setData] = useState()
    const { t } = useTranslation('homepage')
    const { firestore } = firebaseApp
    const { signOut } = useAuth()
    useEffect(() => {
        const getData = async () => {
            const q = query(collection(firestore, 'clientes'))
            const querySnapshot = await getDocs(q)
            const allDocs = querySnapshot.docs.map((doc) => ({ ...doc.data() }))
            setData(allDocs)
        }

        getData()
    }, [firestore, setData])
    return (
        <ScreenTemplate title="Home">
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            {/* <Button ml="auto" w="fit" variant="primary" onPress={toggle}>
                <Button.Text>{theme}</Button.Text>
            </Button> */}
            <YStack f={1} h="100%" w="100%" p="$3">
                <GraphSection />
                <Text>{t('title')}</Text>
                <Button onPress={signOut}>teste</Button>
            </YStack>
        </ScreenTemplate>
    )
}
