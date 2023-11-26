import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { QueryClient } from '@tanstack/react-query'
export const QUERY_STALE_TIME = Infinity // 30sec
export const QUERY_CACHE_TIME = Infinity // 24 hours
export const QUERY_RETRY_STALE_TIME = 10000 * 60 // 1min

export const queryRetryConfigs = {
    staleTime: QUERY_STALE_TIME,
    retryDelay: QUERY_RETRY_STALE_TIME,
}

export const persister = createAsyncStoragePersister({
    storage: AsyncStorage,
    throttleTime: 3000,
})

/**
 * React-Query Options
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: QUERY_CACHE_TIME,
            staleTime: QUERY_STALE_TIME,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
        },
    },
})
