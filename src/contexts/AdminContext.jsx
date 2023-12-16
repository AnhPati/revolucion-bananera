import { createContext } from "react";

const AdminContext = createContext({
    isAdminMode: false,
    setIsAdminMode: () => { },
    adminPanel: {
        isOpen: true,
        tabSelected: 'add'
    },
    setAdminPanel: () => { }
})

export default AdminContext