import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export const BasketProductQuantity = ({ quantity, onClick }) => {
    return (
        <BasketProductQuantityStyled className="basket-product_quantity" onClick={onClick}>
            <span>x{quantity}</span>
            <MdDeleteForever />
        </BasketProductQuantityStyled>
    )
}

const BasketProductQuantityStyled = styled.div`
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
`;