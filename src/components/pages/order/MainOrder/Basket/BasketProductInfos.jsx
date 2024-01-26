import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { theme } from "../../../../../theme";
import { BasketProductLabel } from "./BasketProductLabel";

export const BasketProductInfos = ({ title, price, quantity, onClick }) => {
    return (
        <BasketProductInfosStyled>
            <BasketProductLabel title={title} price={price} />
            <div className="basket-product_quantity" onClick={onClick}>
                <span>x{quantity}</span>
                <MdDeleteForever />
            </div>
        </BasketProductInfosStyled>
    )
}

const BasketProductInfosStyled = styled.div`
    display: grid;
    grid-template-columns: 70% 1fr;
    margin-left: 21px;
    margin-right: ${theme.spacing.md};

    .basket-product_quantity {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        span {
            color: ${theme.colors.primary};
            font-size: ${theme.fonts.size.SM};
        }

        svg {
            display: none;
        }
    }
`;