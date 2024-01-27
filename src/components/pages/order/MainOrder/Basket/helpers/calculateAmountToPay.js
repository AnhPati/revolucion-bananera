import { findObjectById } from "../../../../../../utils/array";

export const calculateAmountToPay = (basketProducts, products) => {
    return basketProducts.reduce((amount, basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, products)
        let productPrice = menuProduct.price

        if (isNaN(menuProduct.price)) {
            productPrice = 0
        }

        amount += basketProduct.quantity * productPrice

        return amount;
    }, 0);
}