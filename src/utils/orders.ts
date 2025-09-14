import { parseDate } from "./date"

export const sortOrdersByDate = <T extends { orderTime: string }>(orders: T[]): T[] => {
    return [...orders].sort((a, b) => {
        const firstOderTime = parseDate(a.orderTime)
        const secondOderTime = parseDate(b.orderTime)

        if (!firstOderTime || !secondOderTime) return 0
        return secondOderTime.getTime() - firstOderTime.getTime()
    })
}