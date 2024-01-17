import { useRef, useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "../enums/product"
import { getDeepClone } from "../utils/array"

export const useAdminProducts = () => {
    const [products, setProducts] = useState(fakeMenu.LARGE)
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

    const handleAddProduct = (newProduct) => {
        const newProducts = getDeepClone(products)

        setProducts([newProduct, ...newProducts])
    }

    const handleDeleteProduct = (id) => {
        const newProducts = products.filter(product => product.id !== id)

        if (id === productSelected.id) {
            setAdminMode({ ...adminMode, cardSelected: null })
            setProductSelected(EMPTY_PRODUCT)
        }

        setProducts(newProducts)
        titleInputRef.current.focus()
    }

    const handleGenerateNewProducts = () => {
        setProducts(fakeMenu.LARGE)
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
        await handleUpdateProduct(productSelected)

        titleInputRef.current.focus()
    }

    const handleUpdateProduct = (productSelected) => {
        const productId = productSelected.id
        const newProducts = getDeepClone(products)
        const indexOfProduct = products.findIndex(product => product.id === productId)

        newProducts[indexOfProduct] = productSelected

        setProductSelected(productSelected)
        setProducts(newProducts)
    }

    return {
        adminMode,
        setAdminMode,
        products,
        handleAddProduct,
        handleDeleteProduct,
        handleGenerateNewProducts,
        handleSelectProduct,
        handleUpdateProduct,
        productSelected,
        titleInputRef
    }
}
