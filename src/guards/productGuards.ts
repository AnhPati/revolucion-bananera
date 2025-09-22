import { BasketProduct } from "@/types/Product";

export function isBasketProductArray(data: unknown): data is BasketProduct[] {
    return Array.isArray(data) &&
        data.every(
            (item) =>
                typeof item === "object" &&
                item !== null &&
                "id" in item &&
                "quantity" in item
        )
}