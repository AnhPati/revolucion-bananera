import styled from "styled-components";
import { LoginForm } from "./LoginForm"
import background from "./../../../assets/burger-background.jpg"
import { Logo } from "../../ui/Logo";

const LoginPage = () => {
    return (
        <LoginPageStyled>
            <Logo className={'login_page-logo'} />
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

    .login_page-logo {
        transform: scale(2.5);
        margin: 40px 0;
    }
`;