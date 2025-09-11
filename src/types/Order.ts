import { BasketProduct } from "./Product"

export type Order = {
    id: string,
    userId: string,
    amount: number,
    orderTime: string,
    products: BasketProduct[],
    statut: OrderStatut
}

export type OrderStatut = "none" | "to process" | "pending" | "accepted" | "archived"