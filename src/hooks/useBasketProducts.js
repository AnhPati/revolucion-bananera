import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { filterArrayWithId, findObjectById, findIndexById, getDeepClone } from "../utils/array"
import { EMPTY_PRODUCT } from "../enums/product"

export const useBasketProducts = () => {
    const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)
    const [basketProductSelected, setBasketProductSelected] = useState(EMPTY_PRODUCT)

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

        if (id === basketProductSelected.id) {
            setBasketProductSelected(EMPTY_PRODUCT)
        }

        setBasketProducts(newBasketProducts)
    }

    return {
        basketProducts,
        handleAddBasketProduct,
        handleDeleteBasketProduct,
        basketProductSelected
    }
}
