import { useContext } from "react"
import AdminPanel from "./AdminPanel/AdminPanel"
import { MenuOrder } from "./MenuOrder/MenuOrder"
import AdminContext from "../../../../contexts/AdminContext"
import styled from "styled-components"

export const MainRightSide = () => {
    const { adminMode } = useContext(AdminContext)
    const isAdminMode = adminMode.isAdminMode

    return (
        <MainRightSideStyled>
            <MenuOrder />
            {isAdminMode && <AdminPanel />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    width: 100%;
    overflow-y: scroll;    
`