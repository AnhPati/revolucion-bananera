import { BasketProduct, Product } from "@/types/Product";
import { findObjectById } from "@/utils/array";
import { convertStringToBoolean } from "@/utils/string";

export const calculateAmountToPay = (basketProducts: BasketProduct[], products: Product[]): number => {
    return basketProducts.reduce((amount, basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, products)
        if (!menuProduct) return amount

        let productPrice = menuProduct.price

        if (isNaN(menuProduct.price)) {
            productPrice = 0
        } else if (convertStringToBoolean(menuProduct.isAvailable) === false) {
            productPrice = 0
        }

        amount += basketProduct.quantity * productPrice

        return amount;
    }, 0);
}