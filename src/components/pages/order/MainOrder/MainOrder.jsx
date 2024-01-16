import styled from "styled-components";
import { theme } from "../../../../theme";
import { MainRightSide } from "./MainRightSide";

export const MainOrder = () => {


    return (
        <MainOrderStyled>
            <div className={'basket-container'}>
                <div className={'basket-header'}>
                    <h3>
                        Total
                    </h3>
                    <h3>
                        0,00 €
                    </h3>
                </div>
                <div className={'basket-content'}>
                    <h2>
                        Votre commande est vide.
                    </h2>
                </div>
                <div className={'basket-footer'}>
                    <h4>
                        Codé avec ❤️ et React.JS
                    </h4>
                </div>
            </div>
            <MainRightSide />
        </MainOrderStyled>
    )
}

const MainOrderStyled = styled.main`
    flex: 1;
    display: grid;
    grid-template-columns: 25% 1fr;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};
    overflow: hidden;
`