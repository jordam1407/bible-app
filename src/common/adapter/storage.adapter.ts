/* eslint-disable @typescript-eslint/no-explicit-any */
import * as SecureStore from 'expo-secure-store'

class SecureStorageAdapter {
    private static instance: SecureStorageAdapter

    private constructor() {}

    static getInstance(): SecureStorageAdapter {
        if (!SecureStorageAdapter.instance) {
            SecureStorageAdapter.instance = new SecureStorageAdapter()
        }
        return SecureStorageAdapter.instance
    }

    async storeData(key: string, value: string) {
        await SecureStore.setItemAsync(key, value)
    }

    async getData<T = any>(key: string): Promise<T | null> {
        const data = await SecureStore.getItemAsync(key)
        try {
            const parsedData = JSON.parse(data || '')
            return parsedData
        } catch (error) {
            return null
        }
    }

    async deleteData(key: string) {
        await SecureStore.deleteItemAsync(key)
    }
}

export const storage = SecureStorageAdapter.getInstance()
