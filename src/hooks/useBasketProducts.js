import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { find, findIndex, getDeepClone } from "../utils/array"

export const useBasketProducts = () => {
    const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)
    const [basketProductsAmount, setBasketProductsAmount] = useState(0)

    const handleAddBasketProduct = (productToAdd) => {
        const newBasketProducts = getDeepClone(basketProducts)

        const isAlready = find(productToAdd.id, newBasketProducts) !== undefined

        const incrementQuantityProduct = () => {
            const productIndex = findIndex(productToAdd.id, newBasketProducts)
            newBasketProducts[productIndex].quantity += 1

            setBasketProducts(newBasketProducts)
        }

        const addProduct = () => {
            const productToAddUpdated = {
                ...productToAdd,
                quantity: 1
            }

            setBasketProducts([productToAddUpdated, ...newBasketProducts])
        }

        if (isAlready) {
            incrementQuantityProduct()

        } else {
            addProduct()
        }

        const newAmount = basketProductsAmount + productToAdd.price

        setBasketProductsAmount(newAmount)
    }

    return {
        basketProducts,
        handleAddBasketProduct,
        basketProductsAmount
    }
}
