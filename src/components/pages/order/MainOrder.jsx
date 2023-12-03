import styled from "styled-components";
import { theme } from "../../../theme";

export const MainOrder = () => {
    return (
        <MainOrderStyled>
            <section id="menu">
                Menu
            </section>
        </MainOrderStyled>
    )
}

const MainOrderStyled = styled.main`
    flex: 1;
    display: flex;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;

    #menu {
        flex: 1;
    }
`;