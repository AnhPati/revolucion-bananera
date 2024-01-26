import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";
import { theme } from "../../../../../theme";

export const BasketProductInfos = ({ title, price, quantity, onClick }) => {
    return (
        <BasketProductInfosStyled>
            <div className="basket-product_left-infos">
                <h5>{title}</h5>
                <p>{formatPrice(price)}</p>
            </div>
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

    .basket-product_left-infos {
        display: grid;
        grid-template-rows: 60% 40%;
        padding: 5px 0 8px 0;
        gap: 5px;

        h5 {
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: ${theme.colors.dark};
            font-size: ${theme.fonts.size.P3};
        }

        p {
            margin: 0;
            color: ${theme.colors.primary};
            font-size: ${theme.fonts.size.SM};
        }
    }

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