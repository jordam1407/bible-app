import AsyncStorage from '@react-native-async-storage/async-storage'
import i18next from 'i18next' // Import i18next instance
import { useEffect, useState } from 'react'

export default function useLanguage() {
    // manage language state
    const [currentLanguage, setCurrentLanguage] = useState<'ptBR' | 'enUS' | 'es'>('ptBR')

    // store on AsyncStorage
    const setLanguageOnStorage = async (value: string) => {
        await AsyncStorage.setItem('language', value)
    }

    // load from AsyncStorage
    const getLanguageFromStore = async () => {
        const value = await AsyncStorage.getItem('language')
        return value
    }

    // load the language from AsyncStorage
    useEffect(() => {
        const loadLanguageFromStorage = async () => {
            const storedLanguage = await getLanguageFromStore()
            if (storedLanguage) {
                setCurrentLanguage(storedLanguage as 'ptBR' | 'enUS' | 'es')
            }
        }

        loadLanguageFromStorage()
    }, [])

    // update language on AsyncStorage and UI (using void instead of await, because we don't want to await)
    useEffect(() => {
        const changeLanguage = async () => {
            void setLanguageOnStorage(currentLanguage)
            i18next.changeLanguage(currentLanguage)
        }

        changeLanguage()
    }, [currentLanguage])

    return { currentLanguage, setCurrentLanguage }
}
