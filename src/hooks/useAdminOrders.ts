import { useState } from "react"
import { filterArrayWithId, findIndexById, getDeepClone } from "@/utils/array"
//@ts-ignore
import { syncOrders, deleteOrder, getOrders } from "../api/orders"
import { Order } from "@/types/Order"

export const useAdminOrders = () => {
    const [orderStatut, setOrderStatut] = useState<string>('none')
    const [orders, setOrders] = useState<Order[] | undefined>(undefined)
    const [tempOrder, setTempOrder] = useState<Order>({} as Order)

    const handleCheckOrder = (newOrder: Order) => {
        setTempOrder(newOrder)
        setOrderStatut('pending')
    }

    const handleValidOrder = async (tempOrder: Order) => {
        let currentOrders = orders

        if (orders === undefined) {
            currentOrders = await getOrders()
        }

        if (!currentOrders) return

        const ordersCopy = getDeepClone(currentOrders)
        const newOrders = [tempOrder, ...ordersCopy]
        setOrderStatut('accepted')
        setOrders(newOrders)
        syncOrders(tempOrder)
        setTempOrder({} as Order)
    }

    const handleDenyOrder = () => {
        setOrderStatut('none')
    }

    const handleArchiveOrder = (id: string) => {
        if (!orders) return

        const newOrders = getDeepClone(orders)
        const orderIndex = findIndexById(id, newOrders)

        const newOrder = newOrders[orderIndex]
        newOrder.statut = "archived"
        setOrders(newOrders)
        syncOrders(newOrder)
    }

    const handleUnarchiveOrder = (id: string) => {
        if (!orders) return

        const newOrders = getDeepClone(orders)
        const orderIndex = findIndexById(id, newOrders)

        const newOrder = newOrders[orderIndex]
        newOrder.statut = "to process"
        setOrders(newOrders)
        syncOrders(newOrder)
    }

    const handleDeleteOrder = async (id: string) => {
        if (!orders) return

        const newOrders = filterArrayWithId(id, orders)

        setOrders(newOrders)
        await deleteOrder(id)
    }

    return {
        setOrders,
        orderStatut,
        orders,
        tempOrder,
        handleCheckOrder,
        handleValidOrder,
        handleDenyOrder,
        handleArchiveOrder,
        handleUnarchiveOrder,
        handleDeleteOrder
    }
}