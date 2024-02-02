import { useRef, useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "../enums/product"
import { filterArrayWithId, getDeepClone } from "../utils/array"
import { syncProducts } from "../api/product"
import { useLocation } from "react-router-dom"

export const useAdminProducts = () => {
    const userId = useLocation().state.username
    const [products, setProducts] = useState(undefined)
    const [adminMode, setAdminMode] = useState({
        isAdminMode: false,
        adminPanel: {
            isOpen: true,
            tabSelected: 'tab-add'
        },
        cardSelected: null,
        setAdminMode: () => { }
    })
    const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
    const titleInputRef = useRef()

    const handleAddProduct = (newProduct, userId) => {
        const productsCopy = getDeepClone(products)
        const newProducts = [newProduct, ...productsCopy]

        setProducts(newProducts)
        syncProducts(userId, newProducts)
    }

    const handleDeleteProduct = (productId, userId) => {
        const newProducts = filterArrayWithId(productId, products)

        if (productId === productSelected.id) {
            setAdminMode({ ...adminMode, cardSelected: null })
            setProductSelected(EMPTY_PRODUCT)
        }

        setProducts(newProducts)
        syncProducts(userId, newProducts)
        adminMode.cardSelected && titleInputRef.current.focus()
    }

    const handleGenerateNewProducts = (userId) => {
        setProducts(fakeMenu.LARGE)
        syncProducts(userId, fakeMenu.LARGE)
    }

    const handleSelectProduct = async (productSelected) => {
        const productId = productSelected.id

        await setAdminMode(prevAdminMode => ({
            ...prevAdminMode,
            adminPanel: {
                isOpen: true,
                tabSelected: 'tab-update',
                cardSelected: productId
            }
        }))

        await setProductSelected(productSelected)

        titleInputRef.current.focus()
    }

    const handleUpdateProduct = async (productSelected, userId) => {
        const productId = productSelected.id
        const newProducts = getDeepClone(products)
        const indexOfProduct = products.findIndex(product => product.id === productId)

        newProducts[indexOfProduct] = productSelected

        setProductSelected(productSelected)
        setProducts(newProducts)
        syncProducts(userId, newProducts)
    }




    return {
        userId,
        adminMode,
        setAdminMode,
        products,
        setProducts,
        handleAddProduct,
        handleDeleteProduct,
        handleGenerateNewProducts,
        handleSelectProduct,
        handleUpdateProduct,
        productSelected,
        titleInputRef
    }
}
