import styled from "styled-components";
import { LoginForm } from "./LoginForm"
import background from "./../../../assets/burger-background.jpg"
import { Logo } from "../../utils/logo";

const LoginPage = () => {
    return (
        <LoginPageStyled>
            <Logo />
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