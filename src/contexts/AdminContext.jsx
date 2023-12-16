import { createContext } from "react";

const AdminContext = createContext({
    isAdminMode: false,
    setIsAdminMode: () => { }
})

export default AdminContext