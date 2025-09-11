import { createContext, PropsWithChildren, useContext } from "react";
import { useAdminProducts } from "@/hooks/useAdminProducts";
import { useBasketProducts } from "@/hooks/useBasketProducts";
import { useAdminOrders } from "@/hooks/useAdminOrders";
import { AdminModeInfos } from "@/types/Admin";
import { BasketProduct, Product } from "@/types/Product";
import { Order, OrderStatut } from "@/types/Order";

type OrderContextType = {
    userId: string,
    adminMode: AdminModeInfos,
    setAdminMode: React.Dispatch<React.SetStateAction<AdminModeInfos>>,

    products: Product[] | undefined,
    setProducts: React.Dispatch<React.SetStateAction<Product[] | undefined>>,
    handleAddProduct: (newProduct: Product, userId: string) => void,
    handleDeleteProduct: (productId: string, userId: string) => void,
    handleGenerateNewProducts: (userId: string) => void,
    handleSelectProduct: (productSelected: Product) => Promise<void>,
    handleUpdateProduct: (productSelected: Product, userId: string) => Promise<void>,
    productSelected: Product,
    setProductSelected: React.Dispatch<React.SetStateAction<Product>>,
    titleInputRef: React.MutableRefObject<HTMLInputElement | undefined>,

    basketProducts: BasketProduct[],
    setBasketProducts: React.Dispatch<React.SetStateAction<BasketProduct[]>>,
    handleAddBasketProduct: (productToAdd: BasketProduct, userId: string) => void,
    handleDeleteBasketProduct: (id: string, userId: string) => void,
    decrementQuantityProduct: (id: string) => void,
    handleClearBasketProduct: (userId: string) => void,

    orders: Order[] | undefined,
    setOrders: React.Dispatch<React.SetStateAction<Order[] | undefined>>,
    orderStatut: OrderStatut,
    tempOrder: Order,
    handleCheckOrder: (newOrder: Order) => void,
    handleValidOrder: (tempOrder: Order) => Promise<void>,
    handleDenyOrder: () => void,
    handleArchiveOrder: (id: string) => void,
    handleUnarchiveOrder: (id: string) => void,
    handleDeleteOrder: (id: string) => Promise<void>
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export const OrderContextProvider = ({ children }: PropsWithChildren) => {
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
        setProductSelected: adminProductsData.setProductSelected,
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