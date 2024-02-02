import { getUserBasketProducts } from "../../../../api/basketProduct"
import { getUserProducts } from "../../../../api/product"

const initialiseUserProducts = async (userId, setProducts) => {
    const userProducts = await getUserProducts(userId)
    setProducts(userProducts)
}

const initialiseUserBasketProducts = (userId, setBasketProducts) => {
    const userProducts = getUserBasketProducts(userId)

    userProducts && setBasketProducts(userProducts)
}

export const initialiseUserSession = async (userId, setProducts, setBasketProducts) => {
    await initialiseUserProducts(userId, setProducts)
    initialiseUserBasketProducts(userId, setBasketProducts)
}