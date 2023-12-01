import { authPath } from '@src/common/config/paths.config'
import { onboardingStore } from '@src/store/onboarding.atom'
import { router, useRootNavigation, useSegments } from 'expo-router'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'

import { useAuth } from './useAuth'

const ONBOARADING_GROUP = '(onboarding)'
const AUTH_GROUP = '(auth)'

export function useProtectedRoute() {
    const onboarded = useAtomValue(onboardingStore.onboarded)
    const { isAuthenticated } = useAuth()

    const segments = useSegments()
    const rootNavigation = useRootNavigation()

    const isOnboarded = onboarded === 'onboarded'

    useEffect(() => {
        if (!rootNavigation?.isReady()) {
            return
        }

        const inOnboardingGroup = segments[0] === ONBOARADING_GROUP
        const inAuthGroup = segments[0] === AUTH_GROUP

        if (!isOnboarded && !inOnboardingGroup) {
            router.replace(authPath.onboarding)
        }
        if (!inAuthGroup && !isAuthenticated && isOnboarded) {
            router.replace(authPath.signIn)
        }
        if (isOnboarded && isAuthenticated && (inOnboardingGroup || inAuthGroup)) {
            router.replace('/')
        }
    }, [isOnboarded, rootNavigation, segments, isAuthenticated])
}
