import AsyncStorage from '@react-native-async-storage/async-storage'
import { onboardingStore } from '@src/store/onboarding.atom'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export default function useOnboardManager() {
    const [onboarded, setOnboarded] = useAtom(onboardingStore.onboarded)

    const setIsOnboarded = async (value: 'onboarded' | 'notOnboarded') => {
        await AsyncStorage.setItem('onboard', value)
    }

    const getIsOnboarded = async () => {
        const value = await AsyncStorage.getItem('onboard')
        return value
    }

    useEffect(() => {
        const loadLanguageFromStorage = async () => {
            const storedLanguage = await getIsOnboarded()
            if (storedLanguage) {
                setOnboarded(storedLanguage as 'onboarded' | 'notOnboarded')
            }
        }
        loadLanguageFromStorage()
    }, [setOnboarded])

    useEffect(() => {
        const changeLanguage = async () => {
            void setIsOnboarded(onboarded)
        }

        changeLanguage()
    }, [onboarded])
}
