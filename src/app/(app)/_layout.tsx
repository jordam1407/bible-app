import { Feather } from '@expo/vector-icons'
import useToggleTheme from '@src/hooks/useToggleTheme'
import { Stack, router } from 'expo-router'
import { Button } from 'tamagui'

export default function AppLayout() {
    const { theme } = useToggleTheme()
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontSize: 16,
                    fontWeight: '600',
                    color: theme === 'light' ? '#000000' : '#FFFFFF',
                },
                headerStyle: {
                    backgroundColor: theme === 'light' ? '#F7F7F7' : '#040D12',
                },
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <Button
                        size="$2"
                        circular
                        onPress={() => router.back()}
                        bg={theme === 'light' ? '$gray12Dark' : '$gray4Dark'}>
                        <Feather
                            name="chevron-left"
                            size={18}
                            style={{
                                backgroundColor: 'transparent',
                                color: theme === 'light' ? '#000000' : '#FFFFFF',
                            }}
                        />
                    </Button>
                ),
            }}></Stack>
    )
}
