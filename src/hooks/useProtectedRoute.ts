import { authPath } from '@src/common/config/paths.config'
import { router, useRootNavigation, useSegments } from 'expo-router'
import { useEffect } from 'react'

const AUTH_GROUP = '(onboarding)'

export function useProtectedRoute() {
    const segments = useSegments()
    const rootNavigation = useRootNavigation()

    const isOnboarded = false

    useEffect(() => {
        if (!rootNavigation?.isReady()) {
            return
        }

        const inAuthGroup = segments[0] === AUTH_GROUP
        if (
            // If the user is not signed in and the initial segment is not anything in the auth group.
            !isOnboarded &&
            !inAuthGroup
        ) {
            // Redirect to the sign-in page.
            router.replace(authPath.onboarding)
        } else if (isOnboarded && inAuthGroup) {
            // Redirect away from the sign-in page.
            router.replace('/')
        }
    }, [isOnboarded, rootNavigation, segments])
}
