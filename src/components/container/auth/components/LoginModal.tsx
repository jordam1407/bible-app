import { Button } from '@src/components/primitives/button'
import { SheetModal } from '@src/components/primitives/SheetModal'
import { useAuth } from '@src/hooks/useAuth'
import { modalStore } from '@src/store/modal.atoms'
import React, { useState } from 'react'
import { Input, YStack } from 'tamagui'

export default function LoginModal() {
    const { login } = useAuth()
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async () => {
        await login({ email, password })
    }
    return (
        <SheetModal modal atom={modalStore.loginAtom}>
            <YStack gap="$2">
                <Input onChangeText={setemail} placeholder="Email" />
                <Input onChangeText={setPassword} placeholder="Password" />
            </YStack>
            <Button onPress={submit}>
                <Button.Text>Sign In</Button.Text>
            </Button>
        </SheetModal>
    )
}
