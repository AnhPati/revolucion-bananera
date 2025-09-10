import { BasketProduct } from "./Product"

export type Order = {
    id: string,
    userId: string,
    amount: number,
    orderTime: string,
    products: BasketProduct[],
    statut: string
}