import { isBasketProductArray } from "@/guards/productGuards"
import { BasketProduct } from "@/types/Product"
import { getLocalStorage, setLocalStorage } from "@/utils/windows"

export const syncBasketProducts = (userId: string, newProducts: BasketProduct[]) => {
    setLocalStorage(userId, newProducts)
}

export const getUserBasketProducts = (userId: string): BasketProduct[] | undefined => {
    const basketProducts = getLocalStorage(userId)
    if (isBasketProductArray(basketProducts)) return basketProducts

    return undefined
}