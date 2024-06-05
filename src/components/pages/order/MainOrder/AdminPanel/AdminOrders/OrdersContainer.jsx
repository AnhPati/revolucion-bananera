import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { OrderContainer } from "./OrderContainer"

export const OrdersContainer = ({ orders, onDelete }) => {
    const lastOrderIndex = orders.length - 1

    return (
        <OrdersContainerStyled>
            {orders.map(({ id, userId, orderTime, products, statut }) => {
                if (statut === "to process") {
                    return (
                        <OrderContainer
                            key={id}
                            id={id}
                            userId={userId}
                            orderTime={orderTime}
                            orderProducts={products}
                            onDelete={onDelete}
                        />
                    )
                }
            })}
        </OrdersContainerStyled>
    )
}

const OrdersContainerStyled = styled.div`
    height: 150px;
    padding: 10px 15px;
    border: solid 1px ${theme.colors.greyLight};
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;

    &:hover { 
        scrollbar-color: initial;
    }

    .order_admin-container {
        position: relative;

        p, li {
            font-size: 12px;
        }

        p {
            margin: 0;
        }

        ul {
            margin: 0;
            padding-left: 10px;
        }

        hr {
            height: 1px;
            background: #e4e5e9;
            border: none;
        }
    }
  
`;