import { storage } from '@src/common/adapter/storage.adapter'
import { User } from 'firebase/auth'

const getUserFromStorage = async (): Promise<User | null> => {
    try {
        const userData = await storage.getData('user')
        return userData
    } catch (error) {
        return null
    }
}

export const UserStorage = { getUserFromStorage }
