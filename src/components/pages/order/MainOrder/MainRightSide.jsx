import { useContext } from "react"
import AdminPanel from "./AdminPanel/AdminPanel"
import { MenuOrder } from "./MenuOrder/MenuOrder"
import OrderContext from "../../../../contexts/OrderContext"
import styled from "styled-components"

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
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;
    overflow-y: hidden;    
`