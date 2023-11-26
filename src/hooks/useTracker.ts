import { last365Days } from '@src/common/helpers/date.helper'
import { mockArray } from '@src/common/helpers/mock.helper'
import { useQuery } from '@tanstack/react-query'

export default function useTracker() {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['tracker'],
        queryFn: () => {
            // Merge last365Days and mockArray, ensuring unique days
            const mergedItems = [
                ...last365Days.filter((day) => !mockArray.find((item) => item.id === day.id)),
                ...mockArray,
            ]

            // Sort the merged items by date
            const sortedItems = mergedItems.sort((a, b) => new Date(a.id) - new Date(b.id))

            // Split the sorted items into 7 chunks of 52 items each
            const chunk1 = sortedItems.slice(0, 49)
            const chunk2 = sortedItems.slice(49, 98)
            const chunk3 = sortedItems.slice(98, 147)
            const chunk4 = sortedItems.slice(147, 196)
            const chunk5 = sortedItems.slice(196, 245)
            const chunk6 = sortedItems.slice(245, 294)
            const chunk7 = sortedItems.slice(294)

            return [chunk1, chunk2, chunk3, chunk4, chunk5, chunk6, chunk7]
        },
    })

    return { isLoading, tracker: data, refetch }
}
