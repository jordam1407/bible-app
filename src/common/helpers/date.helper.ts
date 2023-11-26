import { subDays, format } from 'date-fns'

const today = new Date()

export const last365Days = Array.from({ length: 365 }, (_, index) => {
    const currentDate = subDays(today, index)
    return { id: format(currentDate, 'yyyy-MM-dd') }
})
