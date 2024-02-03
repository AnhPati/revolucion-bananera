import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";
import { calculateAmountToPay } from "./helpers/calculateAmountToPay";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const BasketHeader = () => {
    const { basketProducts, products } = useContext(OrderContext)
    const amountToPay = calculateAmountToPay(basketProducts, products)

    const count = formatPrice(amountToPay)

    return (
        <BasketHeaderStyled>
            <h3>
                Total
            </h3>
            <h3>
                <TransitionGroup className={'casino-container'}>
                    <CSSTransition
                        key={count}
                        classNames={'casino-count'}
                        timeout={500}
                    >
                        <span>{count}</span>
                    </CSSTransition>
                </TransitionGroup>
            </h3>
        </BasketHeaderStyled>
    )
}

const BasketHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    height: 70px;
    background-color: ${theme.colors.dark};

    h3 {
        margin: 0;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        letter-spacing: 2px;

        .casino-container {
            position: relative;
            overflow-y: hidden;

            span {
                display: inline-block;

                &.casino-count-enter {
                    transform: translateY(50px);
                    opacity: 0%;
                }

                &.casino-count-enter-active {    
                        transform: translateY(0);
                        transition: 0.3s;
                        opacity: 100%;
                }

                &.casino-count-exit {
                        position: absolute;
                        bottom:0;
                        right: 0;
                        transform: translateY(0);     
                        opacity: 100%;
                }

                &.casino-count-exit-active {  
                    transform: translateY(-50px);
                    opacity: 0%;  
                    transition: 0.3s;
                }
            }
        }
    }
`;