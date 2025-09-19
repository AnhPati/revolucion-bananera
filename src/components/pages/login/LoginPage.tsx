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
                <div className="login-container-left-side">
                    <div className="login-content">
                        <Logo className={'login_page-logo'} />
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="copyright-container">
                <p>© 2025 Groovy Burger — Tous droits réservés</p>
                <p>Made with ❤️</p>
            </div>
        </LoginPageStyled>
    )
}

export default LoginPage

const LoginPageStyled = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${background});
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .login-container {
        width: 100%;
        flex: 1;
        display: flex;

        .login-container-left-side {
            width: 50%;
            display: flex;
            justify-content: end;

            .login-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 140px;

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
        }
    }
        

    .copyright-container {
        width: 100%;
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 30px;

        p {
            color: ${theme.colors.white};
            font-size: ${theme.fonts.size.SM};
            font-weight: ${theme.fonts.weights.regular};
            margin: 0;
        }
    }

    @media (max-width: 1280px) {
        .login-container .login-container-left-side {
            width: 100%;
            justify-content: center;
        }
    }

    @media (max-width: 600px) {
        .login-container .login-container-left-side .login-content .login_page-logo {    
            transform: scale(1.4);
        }
    }
`;