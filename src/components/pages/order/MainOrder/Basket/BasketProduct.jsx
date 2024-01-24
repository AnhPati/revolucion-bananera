import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";

export const BasketProduct = ({ imageSource, title, price, quantity, onClick }) => {
    return (
        <BasketProductStyled>
            <div className="basket-product_img">
                <img src={imageSource} alt={title} />
            </div>
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
    background: #FFF;
    box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.20);
    border-radius: 5px;
    padding: 8px 16px;

    .basket-product_img {
        height: 70px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .basket-product_infos {
        display: grid;
        grid-template-columns: 70% 1fr;
        margin-left: 21px;
        margin-right: 20px;

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
                color: #17161A;
                font-size: 24px;
            }

            p {
                margin: 0;
                color: #FFA01B;
                font-size: 15px;
            }
        }

        .basket-product_quantity {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            span {
                color: #FFA01B;
                font-size: 15px;
            }

            svg {
                display: none;
            }
        }
    }

    &:hover {
        .basket-product_quantity {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 73px;
            background: #E25549;
            justify-content: center;
            border-radius: 0 5px 5px 0;
            cursor: pointer;

            span {
                display: none;
            }

            svg {
                display: inline-block;
                color: #FFF;
                font-size: 24px;
            }
        }
    }
`;