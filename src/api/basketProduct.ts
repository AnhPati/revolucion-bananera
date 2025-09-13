import { BasketProduct } from "@/types/Product"

export const syncBasketProducts = (userId: string, newProducts: BasketProduct[]) => {
    localStorage.setItem(userId, JSON.stringify(newProducts))
}

export const getUserBasketProducts = (userId: string): BasketProduct[] | undefined => {
    const item = localStorage.getItem(userId)

    return item ? JSON.parse(item) as BasketProduct[] : undefined
}