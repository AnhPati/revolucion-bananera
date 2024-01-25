import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";
import { theme } from "../../../../../theme";
import { BasketProductImg } from "./BasketProductImg";

export const BasketProduct = ({ imageSource, title, price, quantity, onClick }) => {
    return (
        <BasketProductStyled>
            <BasketProductImg src={imageSource} alt={title} />
            <div className="basket-product_infos">
                <div className="basket-product_left-infos">
                    <h5>{title}</h5>
                    <p>{formatPrice(price)}</p>
                </div>
                <div className="basket-product_quantity" onClick={onClick}>
                    <span>x{quantity}</span>
                    <MdDeleteForever />
                </div>
            </div>

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

    .basket-product_infos {
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
    }

    &:hover {
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
`;