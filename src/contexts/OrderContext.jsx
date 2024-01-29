import { createContext } from "react";

const OrderContext = createContext({
    userId: '',
    adminMode: {
        isAdminMode: false,
        adminPanel: {
            isOpen: true,
            tabSelected: 'tab-add',
            cardSelected: null
        }
    },
    setAdminMode: () => { },

    products: [],
    setProducts: () => { },
    handleAddProduct: () => { },
    handleDeleteProduct: () => { },
    handleGenerateNewProducts: () => { },
    handleSelectProduct: () => { },
    handleUpdateProduct: () => { },
    productSelected: {},
    setProductSelected: () => { },
    titleInputRef: {},
    basketProducts: [],
    handleAddBasketProduct: () => { },
    handleDeleteBasketProduct: () => { }
})

export default OrderContext