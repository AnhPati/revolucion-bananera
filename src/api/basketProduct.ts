import { BasketProduct } from "@/types/Product"

export const syncBasketProducts = (userId: string, newProducts: BasketProduct[]) => {
    localStorage.setItem(userId, JSON.stringify(newProducts))
}

export const getUserBasketProducts = (userId: string): BasketProduct[] | undefined => {
    const item = localStorage.getItem(userId)
    if (!item) return

    const basketProducts = JSON.parse(item)
    return basketProducts
}