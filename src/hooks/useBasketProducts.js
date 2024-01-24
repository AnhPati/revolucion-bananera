import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { find, getDeepClone } from "../utils/array"

export const useBasketProducts = () => {
    const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)

    const handleAddBasketProduct = (productToAdd) => {
        const newBasketProducts = getDeepClone(basketProducts)

        const isAlready = find(productToAdd.id, newBasketProducts) !== undefined

        if (isAlready) {
            const productIndex = newBasketProducts.findIndex(product => product.id === productToAdd.id)
            newBasketProducts[productIndex].quantity += 1

            setBasketProducts(newBasketProducts)

        } else {
            const productToAddUpdated = {
                ...productToAdd,
                quantity: 1
            }

            setBasketProducts([productToAddUpdated, ...newBasketProducts])
        }
    }

    return {
        basketProducts,
        handleAddBasketProduct
    }
}
