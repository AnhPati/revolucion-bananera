import styled from "styled-components";
import { LoginForm } from "./LoginForm"
import background from "./../../../assets/burger-background.jpg"
import logo from "./../../../assets/logo-orange.png"
import { theme } from "../../../theme";

const LoginPage = () => {
    return (
        <LoginPageStyled>
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
            <LoginForm />
        </LoginPageStyled>
    )
}

export default LoginPage

const LoginPageStyled = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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