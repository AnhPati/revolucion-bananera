import { MdOutlineHistory } from "react-icons/md"
import { Button } from "../../../../../ui/Button"
import styled from "styled-components"
import { OrdersContainer } from "./OrdersContainer"

export const AdminOrders = () => {


    return (
        <AdminOrdersStyled>
            <OrdersContainer />
            <Button
                label={'Historique des commandes'}
                variant={'success'}
                Icon={<MdOutlineHistory />}
            />
        </AdminOrdersStyled>
    )
}

const AdminOrdersStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 50px;
`;