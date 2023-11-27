import i18n from '@src/common/i18n'
import { ScreenTemplate } from '@src/components/template/ScreenTemplate'
// import useToggleTheme from '@src/hooks/useToggleTheme'
import GraphSection from '@src/modules/home/GraphSection/GraphSection'
// import { useToastController } from '@tamagui/toast'
import { Stack } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { Button, Text, YStack } from 'tamagui'

export default function App() {
    // const toast = useToastController()
    // const { toggle, theme } = useToggleTheme()
    const { t } = useTranslation('homepage')
    console.log(t('title', { name: 'Poliane' }))
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
                <Button onPress={() => i18n.changeLanguage('ptBR')}>teste</Button>
            </YStack>
        </ScreenTemplate>
    )
}
