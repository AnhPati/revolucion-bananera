import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";
import { BasketProductImg } from "./BasketProductImg";
import { BasketProductInfos } from "./BasketProductInfos";

export const BasketProduct = ({ imageSource, title, price, quantity, onDelete, isAdminMode, onClick, selected }) => {

    return (
        <BasketProductStyled $isAdminMode={isAdminMode} onClick={onClick} $isSelected={selected}>
            <BasketProductImg src={imageSource} alt={title} />
            <BasketProductInfos
                title={title}
                price={price}
                quantity={quantity}
                onDelete={onDelete}
            />
        </BasketProductStyled>
    )
}

const BasketProductStyled = styled.li`
    position: relative; 
    width: 100%;
    height: 86px;
    display: grid;
    grid-template-columns: 30% 1fr;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.basketProductShadow};
    border-radius: ${theme.borderRadius.round};
    padding: 8px 16px;

    &:hover {
        cursor: ${({ $isAdminMode }) => $isAdminMode ? 'pointer' : 'default'};
        user-select: none;
        
        .basket-product_quantity {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 73px;
            background: ${theme.colors.red};
            justify-content: center;
            border-radius: 0 ${theme.borderRadius.round} ${theme.borderRadius.round} 0;
            cursor: pointer;

            span {
                display: none;
            }

            svg {
                display: inline-block;
                color: ${theme.colors.white};
                font-size: ${theme.fonts.size.P3};
            }

            &:hover {
                svg {
                    color: ${theme.colors.dark};
                }
            }

            &:active {
                svg {
                    color: ${theme.colors.white};
                }
            }
        }
    }

    ${({ $isAdminMode, $isSelected }) => $isAdminMode && $isSelected && selectedStyles}
`;

const selectedStyles = css`
    background-color: ${theme.colors.primary};
`