import { useState } from "react"
import { filterArrayWithId, findIndexById, getDeepClone } from "../utils/array"
import { syncOrders, deleteOrder } from "../api/orders"

export const useAdminOrders = () => {
    const [orderStatut, setOrderStatut] = useState('none')
    const [orders, setOrders] = useState(undefined)
    const [tempOrder, setTempOrder] = useState({})

    const handleCheckOrder = (newOrder) => {
        setTempOrder(newOrder)
        setOrderStatut('pending')
    }

    const handleValidOrder = (tempOrder) => {
        const ordersCopy = getDeepClone(orders)
        const newOrders = [tempOrder, ...ordersCopy]
        setOrderStatut('accepted')
        setOrders(newOrders)
        syncOrders(tempOrder)
        setTempOrder({})
    }

    const handleDenyOrder = () => {
        setOrderStatut('none')
    }

    const handleArchiveOrder = (id) => {
        const newOrders = getDeepClone(orders)
        const orderIndex = findIndexById(id, newOrders)

        const newOrder = newOrders[orderIndex]
        newOrder.statut = "archived"
        setOrders(newOrders)
        syncOrders(newOrder)
    }

    const handleUnarchiveOrder = (id) => {
        const newOrders = getDeepClone(orders)
        const orderIndex = findIndexById(id, newOrders)

        const newOrder = newOrders[orderIndex]
        newOrder.statut = "to process"
        setOrders(newOrders)
        syncOrders(newOrder)
    }

    const handleDeleteOrder = async (id) => {
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