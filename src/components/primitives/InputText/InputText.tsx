import React from 'react'
import { Circle, Input, XStack, YStack, Text } from 'tamagui'

import { InputTextProps } from './InputText.types'

export default function InputText({ icon, placeholder, keyboard, errorMessage, onChangeText }: InputTextProps) {
    return (
        <YStack>
            <XStack
                ai="center"
                width="100%"
                borderWidth={1}
                borderColor={errorMessage ? '$red10' : '$gray8Light'}
                borderRadius={8}>
                <Input
                    unstyled
                    size="$4"
                    width="100%"
                    keyboardType={keyboard || 'default'}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
                {icon && (
                    <Circle size="$2.5" position="absolute" backgroundColor="$gray2Light" right="$2.5">
                        {icon}
                    </Circle>
                )}
            </XStack>
            {errorMessage && (
                <Text marginTop="$1" marginLeft="$1.5" color="$red9" fontSize={12}>
                    {errorMessage}
                </Text>
            )}
        </YStack>
    )
}
