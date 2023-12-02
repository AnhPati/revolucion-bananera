import styled from "styled-components";
import logo from "./../../assets/logo-orange.png"
import { theme } from "../../theme";

export const Logo = () => {
    return (
        <LogoStyled>
            <h1>
                Crazee
            </h1>
            <div className={'img-container'}>
                <img src={logo} alt={'Crazee Burger logo'} />
            </div>
            <h1>
                Burger
            </h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};

    h1 {
        font-size: 110px;
        font-weight: ${theme.fonts.weights.bold};
        margin: 0;
    }

    .img-container {
        width: 200px;
        height: 150px;
        margin: 0 ${theme.gridUnit * 0.625}px;

        img {
            width: 100%;
        }
    }
`;