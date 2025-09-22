import styled from "styled-components";
import { theme } from "@/theme/theme";
import { MainLeftSide } from "./MainLeftSide";
import { Basket } from "./Basket/Basket";

export const MainOrder = () => {


    return (
        <MainOrderStyled>
            <MainLeftSide />
            <Basket />
        </MainOrderStyled>
    )
}

const MainOrderStyled = styled.main`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 25%;
    height: calc(95vh - 10vh);
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};
    overflow: hidden;
`