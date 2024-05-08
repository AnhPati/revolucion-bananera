import styled from "styled-components";
import { LoginForm } from "./LoginForm"
import background from "./../../../assets/burger-background.jpg"
import { Logo } from "../../ui/Logo";
import { theme } from "../../../theme";
import { bounceIn, fadeInBottom, fadeInLeft, fadeInRight } from "../../../theme/animations";

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

        h1:first-child {
            animation: ${fadeInLeft} ${theme.animations.speed.quick} ease-out;
        }

        h1:last-child {
            animation: ${fadeInRight} ${theme.animations.speed.quick} ease-out;
        }

        .img-container {
            animation: ${bounceIn} ${theme.animations.speed.quick} ease-out;
        }
    }

    form {
        animation: ${fadeInBottom} ${theme.animations.speed.quick} ease-out;
    }
`;