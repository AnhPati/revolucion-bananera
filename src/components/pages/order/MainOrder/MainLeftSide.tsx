import AdminPanel from "./AdminPanel/AdminPanel"
import { MenuOrder } from "./MenuOrder/MenuOrder"
import { useOrderContext } from "@/contexts/OrderContext"
import styled from "styled-components"
import { theme } from "@/theme/theme"

export const MainLeftSide = () => {
    const { adminMode } = useOrderContext()
    const isAdminMode = adminMode.isAdminMode

    return (
        <MainLeftSideStyled>
            <MenuOrder />
            {isAdminMode && <AdminPanel />}
        </MainLeftSideStyled>
    )
}

const MainLeftSideStyled = styled.div`
    position: relative;
    display: grid;
    box-shadow: ${theme.shadows.strong};
    overflow-y: hidden;    
`