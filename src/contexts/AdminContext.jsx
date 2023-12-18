import { createContext } from "react";

const AdminContext = createContext({
    adminMode: {
        isAdminMode: false,
        adminPanel: {
            isOpen: true,
            tabSelected: 'add'
        }
    },
    setAdminMode: () => { }
})

export default AdminContext