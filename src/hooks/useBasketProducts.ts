import { useState } from "react"
import { fakeBasket } from "@/fakeData/fakeBasket"
import { filterArrayWithId, findObjectById, findIndexById, getDeepClone } from "@/utils/array"
import { syncBasketProducts } from "@/api/basketProduct"
import { BasketProduct } from "@/types/Product"

export const useBasketProducts = () => {
    const [basketProducts, setBasketProducts] = useState<BasketProduct[]>(fakeBasket.EMPTY)

    const handleAddBasketProduct = (productToAdd: BasketProduct, userId: string) => {
        const newBasketProducts = getDeepClone(basketProducts)
        const idProductToAdd = productToAdd.id

        const isAlready = findObjectById(idProductToAdd, newBasketProducts) !== undefined

        const incrementQuantityProduct = () => {
            const productIndex = findIndexById(productToAdd.id, newBasketProducts)
            newBasketProducts[productIndex].quantity += 1

            setBasketProducts(newBasketProducts)
            syncBasketProducts(userId, newBasketProducts)
        }

        const addProduct = () => {
            const productToAddUpdated = {
                id: idProductToAdd,
                quantity: 1
            }

            setBasketProducts([productToAddUpdated, ...newBasketProducts])
            syncBasketProducts(userId, [productToAddUpdated, ...newBasketProducts])
        }

        if (isAlready) {
            incrementQuantityProduct()

        } else {
            addProduct()
        }
    }

    const decrementQuantityProduct = (id: string) => {
        const newBasketProducts = getDeepClone(basketProducts)
        const productIndex = findIndexById(id, newBasketProducts)

        newBasketProducts[productIndex].quantity -= 1

        setBasketProducts(newBasketProducts)
    }

    const handleDeleteBasketProduct = (id: string, userId: string) => {
        const newBasketProducts = filterArrayWithId(id, basketProducts)

        setBasketProducts(newBasketProducts)
        syncBasketProducts(userId, newBasketProducts)
    }

    const handleClearBasketProduct = (userId: string) => {
        setBasketProducts(fakeBasket.EMPTY)
        syncBasketProducts(userId, fakeBasket.EMPTY)
    }

    return {
        basketProducts,
        setBasketProducts,
        handleAddBasketProduct,
        handleDeleteBasketProduct,
        handleClearBasketProduct,
        decrementQuantityProduct
    }
}
