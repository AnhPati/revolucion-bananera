import { getUserBasketProducts } from "@/api/basketProduct"
import { getOrders } from "@/api/orders"
import { getUserProducts } from "@/api/product"
import { Order } from "@/types/Order"
import { BasketProduct, Product } from "@/types/Product"

const initialiseUserProducts = async (userId: string, setProducts: React.Dispatch<React.SetStateAction<Product[] | undefined>>) => {
    const userProducts = await getUserProducts(userId)
    setProducts(userProducts)
}

const initialiseUserBasketProducts = (userId: string, setBasketProducts: React.Dispatch<React.SetStateAction<BasketProduct[]>>) => {
    const userProducts = getUserBasketProducts(userId)

    userProducts && setBasketProducts(userProducts)
}

const initialiseOrders = async (isAdminMode: boolean, setOrders: React.Dispatch<React.SetStateAction<Order[] | undefined>>) => {
    const orders = await getOrders()
    isAdminMode && setOrders(orders)
}

export const initialiseUserSession = async (
    userId: string,
    isAdminMode: boolean,
    setProducts: React.Dispatch<React.SetStateAction<Product[] | undefined>>,
    setBasketProducts: React.Dispatch<React.SetStateAction<BasketProduct[]>>,
    setOrders: React.Dispatch<React.SetStateAction<Order[] | undefined>>
) => {
    await initialiseUserProducts(userId, setProducts)
    await initialiseOrders(isAdminMode, setOrders)
    initialiseUserBasketProducts(userId, setBasketProducts)
}