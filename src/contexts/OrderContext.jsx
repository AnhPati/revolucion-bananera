import { createContext, useContext } from "react";
import { useAdminProducts } from "../hooks/useAdminProducts";
import { useBasketProducts } from "../hooks/useBasketProducts";
import { useAdminOrders } from "../hooks/useAdminOrders";

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
    handleDeleteOrder: () => { },
    handleClearBasketProduct: () => { }
})

export const OrderContextProvider = ({ children }) => {
    const adminProductsData = useAdminProducts()
    const basketProductsData = useBasketProducts()
    const adminOrdersData = useAdminOrders()

    const orderContextValue = {
        userId: adminProductsData.userId,
        adminMode: adminProductsData.adminMode,
        setAdminMode: adminProductsData.setAdminMode,
        products: adminProductsData.products,
        setProducts: adminProductsData.setProducts,
        handleAddProduct: adminProductsData.handleAddProduct,
        handleDeleteProduct: adminProductsData.handleDeleteProduct,
        handleGenerateNewProducts: adminProductsData.handleGenerateNewProducts,
        handleSelectProduct: adminProductsData.handleSelectProduct,
        handleUpdateProduct: adminProductsData.handleUpdateProduct,
        productSelected: adminProductsData.productSelected,
        titleInputRef: adminProductsData.titleInputRef,

        basketProducts: basketProductsData.basketProducts,
        setBasketProducts: basketProductsData.setBasketProducts,
        handleAddBasketProduct: basketProductsData.handleAddBasketProduct,
        handleDeleteBasketProduct: basketProductsData.handleDeleteBasketProduct,
        decrementQuantityProduct: basketProductsData.decrementQuantityProduct,
        handleClearBasketProduct: basketProductsData.handleClearBasketProduct,

        orders: adminOrdersData.orders,
        setOrders: adminOrdersData.setOrders,
        orderStatut: adminOrdersData.orderStatut,
        tempOrder: adminOrdersData.tempOrder,
        handleCheckOrder: adminOrdersData.handleCheckOrder,
        handleValidOrder: adminOrdersData.handleValidOrder,
        handleDenyOrder: adminOrdersData.handleDenyOrder,
        handleArchiveOrder: adminOrdersData.handleArchiveOrder,
        handleUnarchiveOrder: adminOrdersData.handleUnarchiveOrder,
        handleDeleteOrder: adminOrdersData.handleDeleteOrder
    }

    return (
        <OrderContext.Provider value={orderContextValue}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrderContext = () => useContext(OrderContext)

export default OrderContext