import styled from "styled-components";
import { theme } from "../../../../theme";
import { MainRightSide } from "./MainRightSide";
import { Basket } from "./BASKET";

export const MainOrder = () => {


    return (
        <MainOrderStyled>
            <Basket />
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