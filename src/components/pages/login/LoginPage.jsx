import styled from "styled-components";
import { LoginForm } from "./LoginForm"
import background from "./../../../assets/burger-background.jpg"
import { Logo } from "../../ui/Logo";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { theme } from "../../../theme";

const LoginPage = () => {
    return (
        <LoginPageStyled>
            <TransitionGroup>
                <CSSTransition
                    classNames={'screensplash-logo'}
                    appear={true}
                    timeout={500}>
                    <Logo className={'login_page-logo'} />
                </CSSTransition>
            </TransitionGroup>
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

    .screensplash-logo-appear h1:first-child {
        transform: translateX(-200px);
        opacity: 0%;
    }

    .screensplash-logo-appear-active h1:first-child {
        transform: translateX(0);
        transition: ${theme.animations.speed.quick} ease-out;
        opacity: 100%;
    }

    .screensplash-logo-appear h1:last-child {
        transform: translateX(200px);
        opacity: 0%;
    }

    .screensplash-logo-appear-active h1:last-child {
        transform: translateX(0);
        transition: ${theme.animations.speed.quick} ease-out;
        opacity: 100%;
    }

    .screensplash-logo-appear .img-container {
        transform: scale(2);
        opacity: 0%;
    }

    .screensplash-logo-appear-active .img-container {
        transform: translateX(0);
        transition: ${theme.animations.speed.quick} ease-out;
        opacity: 100%;
    }

    form {
        animation: fadeInBottom ${theme.animations.speed.quick} ease-out;
    }

    @keyframes fadeInBottom {
        0% {
            transform: translateY(200px);
            opacity: 0%;
        }

        100% {
            transform: translateX(0%);
            opacity: 100%;
        }
    }
`;