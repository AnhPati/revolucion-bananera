import styled from "styled-components";
import { theme } from "../../theme";
import logoImg from "../../assets/logo-orange.png"

export const Logo = () => {
    return (
        <LogoStyled>
            <h1>
                Crazee
            </h1>
            <div className={'img-container'}>
                <img src={logoImg} alt={'Crazee Burger logo'} />
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
    color: ${theme.colors.primary_burger};

    h1 {
        font-size: 110px;
        font-weight: ${theme.weights.bold};
        margin: 0;
    }

    .img-container {
        max-width: 200px;
        max-height: 150px;

        img {
            width: 100%;
        }
    }
`;