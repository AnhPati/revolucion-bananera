import { useContext } from "react"
import AdminPanel from "./AdminPanel/AdminPanel"
import { MenuOrder } from "./MenuOrder/MenuOrder"
import OrderContext from "../../../../contexts/OrderContext"
import styled from "styled-components"
import { theme } from "../../../../theme"

export const MainRightSide = () => {
    const { adminMode } = useContext(OrderContext)
    const isAdminMode = adminMode.isAdminMode

    return (
        <MainRightSideStyled>
            <MenuOrder />
            {isAdminMode && <AdminPanel />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    position: relative;
    display: grid;
    box-shadow: ${theme.shadows.strong};
    overflow-y: hidden;    
`