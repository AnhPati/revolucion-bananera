import styled from "styled-components";
import { LoginForm } from "./LoginForm"
import background from "@/assets/burger-right-background.jpg"
import { Logo } from "@/components/ui/Logo";
import { theme } from "@/theme/theme";
import { backInBounce, fadeInBottom, slideInSpace } from "@/theme/animations";

const LoginPage = () => {
    return (
        <LoginPageStyled>
            <div className="login-container">
                <Logo className={'login_page-logo'} />
                <LoginForm />
            </div>
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
    align-items: center;

    .login-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 100px;

        .login_page-logo {
            transform: scale(2.5);
            margin: 40px 0;

            h1:first-child {
                animation: ${slideInSpace("60%", "-20%", "0%")} ${theme.animations.speed.quick} ease-out;
            }

            h1:last-child {
                animation: ${slideInSpace("-60%", "20%", "0%")} ${theme.animations.speed.quick} ease-out;
            }

            .img-container {
                animation: ${backInBounce} ${theme.animations.speed.quick} ease-out;
            }
        }

        form {
            animation: ${fadeInBottom} ${theme.animations.speed.quick} ease-out;
        }
    }

    @media (max-width: 1280px) {
        .login-container {
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        .login-container {
            .login_page-logo {    
                transform: scale(1.45);
            }
        }
    }
`;