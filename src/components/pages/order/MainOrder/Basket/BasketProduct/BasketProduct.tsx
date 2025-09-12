import styled, { css } from "styled-components";
import { theme } from "@/theme";
import { BasketProductImg } from "./BasketProductImg";
import { BasketProductInfos } from "./BasketProductInfos";
import { Sticker } from "@/components/ui/Sticker";

type BasketProductProps = {
    imageSource?: string,
    title?: string,
    price: string,
    quantity: number,
    onDelete?: React.MouseEventHandler<HTMLDivElement>,
    isClickable?: boolean,
    onClick?: React.MouseEventHandler<HTMLLIElement>,
    isSelected?: boolean,
    isPublicised?: boolean,
    isUnavailable?: boolean
}


export const BasketProduct = ({
    imageSource,
    title,
    price,
    quantity,
    onDelete,
    isClickable,
    onClick,
    isSelected,
    isPublicised,
    isUnavailable
}: BasketProductProps) => {
    return (
        <BasketProductStyled $isClickable={isClickable} onClick={onClick} $isSelected={isSelected}>
            {isPublicised && <Sticker className={'basket-advertising'} />}
            <BasketProductImg src={imageSource} alt={title} />
            <BasketProductInfos
                title={title}
                price={price}
                quantity={quantity}
                onDelete={onDelete}
                isClickable={isClickable}
                isSelected={isSelected}
                isUnavailable={isUnavailable}
            />
        </BasketProductStyled>
    )
}

type BasketProductStyled = {
    $isSelected?: boolean,
    $isClickable?: boolean
}

const BasketProductStyled = styled.li<BasketProductStyled>`
    position: relative; 
    width: 100%;
    height: 86px;
    display: grid;
    grid-template-columns: 30% 1fr;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.basketProductShadow};
    border-radius: ${theme.borderRadius.round};
    padding: ${theme.spacing.xs} 16px;

    .basket-advertising {
        position: absolute;
        left: 20%;
        bottom: 10%;
    }

    &:hover {
        cursor: ${({ $isClickable }) => $isClickable ? 'pointer' : 'default'};
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

    ${({ $isClickable, $isSelected }) => $isClickable && $isSelected && selectedStyles}
`;

const selectedStyles = css`
    background-color: ${theme.colors.primary};
`