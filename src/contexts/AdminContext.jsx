import { createContext } from "react";

const AdminContext = createContext({
    adminMode: {
        isAdminMode: false,
        adminPanel: {
            isOpen: true,
            tabSelected: 'tab-add'
        }
    },
    setAdminMode: () => { }
})

export default AdminContext