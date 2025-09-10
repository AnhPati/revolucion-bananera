import AdminPanel from "./AdminPanel/AdminPanel"
import { MenuOrder } from "./MenuOrder/MenuOrder"
import { useOrderContext } from "../../../../contexts/OrderContext"
import styled from "styled-components"
import { theme } from "../../../../theme"

export const MainRightSide = () => {
    const { adminMode } = useOrderContext()
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