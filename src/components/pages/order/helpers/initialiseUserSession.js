import { getUserBasketProducts } from "../../../../api/basketProduct"
import { getOrders } from "../../../../api/orders"
import { getUserProducts } from "../../../../api/product"

const initialiseUserProducts = async (userId, setProducts) => {
    const userProducts = await getUserProducts(userId)
    setProducts(userProducts)
}

const initialiseUserBasketProducts = (userId, setBasketProducts) => {
    const userProducts = getUserBasketProducts(userId)

    userProducts && setBasketProducts(userProducts)
}

const initialiseOrders = async (isAdminMode, setOrders) => {
    const orders = await getOrders()
    isAdminMode && setOrders(orders)
}

export const initialiseUserSession = async (userId, isAdminMode, setProducts, setBasketProducts, setOrders) => {
    await initialiseUserProducts(userId, setProducts)
    await initialiseOrders(isAdminMode, setOrders)
    initialiseUserBasketProducts(userId, setBasketProducts)
}