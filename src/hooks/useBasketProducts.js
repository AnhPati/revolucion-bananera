import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { filterArrayWithId, findObjectById, findIndexById, getDeepClone } from "../utils/array"

export const useBasketProducts = () => {
    const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)

    const handleAddBasketProduct = (productToAdd) => {
        const newBasketProducts = getDeepClone(basketProducts)
        const idProductToAdd = productToAdd.id

        const isAlready = findObjectById(idProductToAdd, newBasketProducts) !== undefined

        const incrementQuantityProduct = () => {
            const productIndex = findIndexById(productToAdd.id, newBasketProducts)
            newBasketProducts[productIndex].quantity += 1

            setBasketProducts(newBasketProducts)
        }

        const addProduct = () => {
            const productToAddUpdated = {
                id: idProductToAdd,
                quantity: 1
            }

            setBasketProducts([productToAddUpdated, ...newBasketProducts])
        }

        if (isAlready) {
            incrementQuantityProduct()

        } else {
            addProduct()
        }
    }

    const handleDeleteBasketProduct = (id) => {
        const newBasketProducts = filterArrayWithId(id, basketProducts)

        setBasketProducts(newBasketProducts)
    }

    return {
        basketProducts,
        handleAddBasketProduct,
        handleDeleteBasketProduct
    }
}
