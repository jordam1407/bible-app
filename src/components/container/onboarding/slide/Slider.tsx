import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { YStack } from 'tamagui'

import Bible from '../bible/Bible'
import Features from '../features/Features'
import Welcome from '../welcome/Welcome'

const slides = [{ component: <Welcome /> }, { component: <Features /> }, { component: <Bible /> }]
export default function Slider() {
    const { width } = useWindowDimensions()
    return (
        <YStack f={1}>
            <FlashList
                estimatedItemSize={width}
                horizontal
                pagingEnabled
                data={slides}
                renderItem={({ item }) => <>{item.component}</>}
            />
        </YStack>
    )
}
