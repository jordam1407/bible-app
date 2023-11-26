import { Feather } from '@expo/vector-icons'
import { Toast, useToastState } from '@tamagui/toast'
import { FunctionComponent } from 'react'
import { Dimensions } from 'react-native'
import { Circle, XStack, YStack } from 'tamagui'

export const ToastController = () => {
    const { width } = Dimensions.get('window')
    const currentToast = useToastState()

    if (!currentToast || currentToast.isHandledNatively) {
        return null
    }

    const ToastWrapper = ({ children, color }: { children: React.ReactNode; color: string }) => {
        return (
            <Toast
                key={currentToast.id}
                duration={currentToast.duration}
                enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
                exitStyle={{ opacity: 0, scale: 1, y: -20 }}
                y={0}
                theme={color === 'red' ? 'red' : color === 'green' ? 'green' : 'blue'}
                opacity={1}
                scale={1}
                top={30}
                maxWidth={width - 40}
                zIndex={100_000}
                animation="quick">
                {children}
            </Toast>
        )
    }

    if (currentToast.type === 'error') {
        return (
            <ToastWrapper color={'red'}>
                <XStack ai="center" jc="center" gap="$3">
                    <Circle backgroundColor="gray2Light" padding="$1">
                        <Feather name="x" size={22} color="red" />
                    </Circle>
                    <YStack>
                        <Toast.Title>{currentToast.title || 'Algo deu Errado!'}</Toast.Title>
                        <Toast.Description>{currentToast.message || 'Por favor, tente novamente.'}</Toast.Description>
                    </YStack>
                </XStack>
            </ToastWrapper>
        )
    }

    if (currentToast.type === 'success') {
        return (
            <ToastWrapper color={'blue'}>
                <XStack ai="center" jc="center" gap="$3">
                    <Circle backgroundColor="$gray2Light" padding="$1">
                        <Feather name="check" size={22} color="blue" />
                    </Circle>
                    <YStack>
                        <Toast.Title>{currentToast.title || 'Operação concluída!'}</Toast.Title>
                        <Toast.Description>{currentToast.message || 'Salvo com sucesso.'}</Toast.Description>
                    </YStack>
                </XStack>
            </ToastWrapper>
        )
    }

    return (
        <ToastWrapper color={'green'}>
            <XStack ai="center" jc="center" gap="$3">
                <Circle backgroundColor="gray2Light" padding="$1">
                    {currentToast.icon}
                </Circle>
                <YStack>
                    <Toast.Title>{currentToast.title}</Toast.Title>
                    <Toast.Description>{currentToast.message}</Toast.Description>
                </YStack>
            </XStack>
        </ToastWrapper>
    )
}

declare module '@tamagui/toast' {
    interface CustomData {
        type?: 'error' | 'success'
        message?: string
        icon?: JSX.Element | FunctionComponent<{ color?: string; size?: number }> | null
    }
}
