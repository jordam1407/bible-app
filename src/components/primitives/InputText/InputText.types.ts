import { KeyboardTypeOptions } from 'react-native'

export interface InputTextProps {
    icon?: React.JSX.Element
    placeholder?: string
    keyboard?: KeyboardTypeOptions
    errorMessage?: string
    onChangeText?: (value: string) => void
}
