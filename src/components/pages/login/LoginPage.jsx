import styled from "styled-components";
import { LoginForm } from "./LoginForm"
import background from "./../../../assets/burger-background.jpg"

const LoginPage = () => {
    return (
        <LoginPageStyled>
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