import { useRef, useState } from "react"
import { fakeMenu } from "@/fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "@/constants/product"
import { filterArrayWithId, getDeepClone } from "@/utils/array"
import { syncProducts } from "@/api/product"
import { useLocation } from "react-router-dom"
import { Product } from "@/types/Product"
import { AdminModeInfos } from "@/types/Admin"

export const useAdminProducts = () => {
    const userId: string = useLocation().state.username
    const [products, setProducts] = useState<Product[] | undefined>(undefined)
    const [adminMode, setAdminMode] = useState<AdminModeInfos>({
        isAdminMode: false,
        adminPanel: {
            isOpen: true,
            tabSelected: 'tab-add'
        },
        cardSelected: null
    })
    const [productSelected, setProductSelected] = useState<Product>(EMPTY_PRODUCT)
    const titleInputRef = useRef<HTMLInputElement>()

    const handleAddProduct = (newProduct: Product, userId: string) => {
        if (!products) return

        const productsCopy = getDeepClone(products)
        const newProducts = [newProduct, ...productsCopy]

        setProducts(newProducts)
        syncProducts(userId, newProducts)
    }

    const handleDeleteProduct = (productId: string, userId: string) => {
        if (!products) return

        const newProducts = filterArrayWithId(productId, products)

        if (productId === productSelected.id) {
            setAdminMode({ ...adminMode, cardSelected: null })
            setProductSelected(EMPTY_PRODUCT)
        }

        setProducts(newProducts)
        syncProducts(userId, newProducts)

        adminMode.cardSelected && titleInputRef.current?.focus()
    }

    const handleGenerateNewProducts = (userId: string) => {
        setProducts(fakeMenu.LARGE)
        syncProducts(userId, fakeMenu.LARGE)
    }

    const handleSelectProduct = async (productSelected: Product) => {
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

        titleInputRef.current?.focus()
    }

    const handleUpdateProduct = async (productSelected: Product, userId: string) => {
        const productId = productSelected.id
        if (!products) return

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
        setProductSelected,
        titleInputRef
    }
}
