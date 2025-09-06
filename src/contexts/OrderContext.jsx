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
    setBasketProducts: () => { },
    handleAddBasketProduct: () => { },
    handleDeleteBasketProduct: () => { },
    decrementQuantityProduct: () => { },
    setOrders: () => { },
    initialiseUserProducts: () => { },
    orderStatut: '',
    orders: [],
    tempOrder: {},
    handleCheckOrder: () => { },
    handleValidOrder: () => { },
    handleDenyOrder: () => { },
    handleArchiveOrder: () => { },
    handleUnarchiveOrder: () => { },
    handleClearBasketProduct: () => { }
})

export default OrderContext