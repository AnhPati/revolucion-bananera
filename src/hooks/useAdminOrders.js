import { useState } from "react"
import { findIndexById, getDeepClone } from "../utils/array"
import { syncOrders } from "../api/orders"

export const useAdminOrders = () => {
    const [orderStatut, setOrderStatut] = useState('none')
    const [orders, setOrders] = useState([])
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

    const handleDeleteOrder = (id) => {
        const newOrders = getDeepClone(orders)
        const orderIndex = findIndexById(id, newOrders)

        newOrders[orderIndex].statut = "archived"

        setOrders(newOrders)
    }

    return {
        setOrders,
        orderStatut,
        orders,
        tempOrder,
        handleCheckOrder,
        handleValidOrder,
        handleDenyOrder,
        handleDeleteOrder
    }
}