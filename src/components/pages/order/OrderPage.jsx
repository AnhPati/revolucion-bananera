import styled from "styled-components";
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme";
import { MainOrder } from "./MainOrder/MainOrder";
import { useRef, useState } from "react";
import AdminContext from "../../../contexts/AdminContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";

const OrderPage = () => {
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
        const newProducts = [...products]

        setProducts([newProduct, ...newProducts])
    }

    const handleDeleteProduct = (id) => {
        const newProducts = products.filter(product => product.id.toString() !== id.toString())

        setProducts(newProducts)
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
        const newProducts = [...products]
        const indexOfProduct = products.findIndex(product => product.id === productId)

        newProducts[indexOfProduct] = productSelected

        setProductSelected(productSelected)
        setProducts(newProducts)
    }

    const adminContextValue = {
        adminMode,
        setAdminMode,
        products,
        handleAddProduct,
        handleDeleteProduct,
        handleGenerateNewProducts,
        handleSelectProduct,
        handleUpdateProduct,
        productSelected,
        setProductSelected,
        titleInputRef,
    }

    return (
        <OrderPageStyled>
            <div className={'order-container'}>
                <AdminContext.Provider value={adminContextValue}>
                    <Navbar />
                    <MainOrder />
                </AdminContext.Provider>
            </div>
        </OrderPageStyled>
    )
}

export default OrderPage

const OrderPageStyled = styled.div`
    height: 100vh;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    padding-top: 24.5px;
    padding-bottom: 24.5px;

    .order-container {
        width: 1400px;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
        background: ${theme.colors.background_white};
    }
`;