import { createContext } from "react";

const OrderContext = createContext({
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
    handleDeleteBasketProduct: () => { },
    basketProductSelected: {}
})

export default OrderContext