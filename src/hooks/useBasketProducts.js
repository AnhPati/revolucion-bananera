import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { filter, find, findIndex, getDeepClone } from "../utils/array"
import { EMPTY_PRODUCT } from "../enums/product"

export const useBasketProducts = () => {
    const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)
    const [basketProductSelected, setBasketProductSelected] = useState(EMPTY_PRODUCT)

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
    }

    const handleDeleteBasketProduct = (id) => {
        const newBasketProducts = filter(id, basketProducts)

        if (id === basketProductSelected.id) {
            setBasketProductSelected(EMPTY_PRODUCT)
        }

        setBasketProducts(newBasketProducts)
    }

    const handleUpdateBasketProduct = async (productSelected) => {
        const productId = productSelected.id

        const newBasketProducts = getDeepClone(basketProducts)
        const indexOfProduct = basketProducts.findIndex(product => product.id === productId)

        newBasketProducts[indexOfProduct] = productSelected

        setBasketProductSelected(productSelected)
        setBasketProducts(newBasketProducts)
    }

    return {
        basketProducts,
        handleAddBasketProduct,
        handleDeleteBasketProduct,
        handleUpdateBasketProduct,
        basketProductSelected
    }
}
