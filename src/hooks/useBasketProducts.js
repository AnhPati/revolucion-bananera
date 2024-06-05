import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { filterArrayWithId, findObjectById, findIndexById, getDeepClone } from "../utils/array"
import { syncBasketProducts } from "../api/basketProduct"

export const useBasketProducts = () => {
    const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)
    const [orderStatut, setOrderStatut] = useState('none')
    const [orders, setOrders] = useState([])
    const [tempOrder, setTempOrder] = useState({})

    const handleAddBasketProduct = (productToAdd, userId) => {
        const newBasketProducts = getDeepClone(basketProducts)
        const idProductToAdd = productToAdd.id

        const isAlready = findObjectById(idProductToAdd, newBasketProducts) !== undefined

        const incrementQuantityProduct = () => {
            const productIndex = findIndexById(productToAdd.id, newBasketProducts)
            newBasketProducts[productIndex].quantity += 1

            setBasketProducts(newBasketProducts)
            syncBasketProducts(userId, newBasketProducts)
        }

        const addProduct = () => {
            const productToAddUpdated = {
                id: idProductToAdd,
                quantity: 1
            }

            setBasketProducts([productToAddUpdated, ...newBasketProducts])
            syncBasketProducts(userId, [productToAddUpdated, ...newBasketProducts])
        }

        if (isAlready) {
            incrementQuantityProduct()

        } else {
            addProduct()
        }
    }

    const decrementQuantityProduct = (id) => {
        const newBasketProducts = getDeepClone(basketProducts)
        const productIndex = findIndexById(id, newBasketProducts)

        newBasketProducts[productIndex].quantity -= 1

        setBasketProducts(newBasketProducts)
    }

    const handleDeleteBasketProduct = (id, userId) => {
        const newBasketProducts = filterArrayWithId(id, basketProducts)

        setBasketProducts(newBasketProducts)
        syncBasketProducts(userId, newBasketProducts)
    }

    const handleCheckOrder = (newOrder) => {
        setTempOrder(newOrder)
        setOrderStatut('pending')
    }

    const handleValidOrder = () => {
        const ordersCopy = getDeepClone(orders)
        const newOrders = [tempOrder, ...ordersCopy]
        setOrderStatut('accepted')
        setOrders(newOrders)
        setBasketProducts(fakeBasket.EMPTY)
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
        basketProducts,
        setBasketProducts,
        handleAddBasketProduct,
        handleDeleteBasketProduct,
        decrementQuantityProduct,
        orderStatut,
        orders,
        tempOrder,
        handleCheckOrder,
        handleValidOrder,
        handleDenyOrder,
        handleDeleteOrder
    }
}
