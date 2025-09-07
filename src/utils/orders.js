import { parseDate } from "./date"

export const sortOrdersByDate = (orders) => [...orders].sort((a, b) => new Date(parseDate(b.orderTime)) - new Date(parseDate(a.orderTime)))