import { createContext } from "react";

const AdminContext = createContext({
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
    handleUpdateProduct: () => { }
})

export default AdminContext