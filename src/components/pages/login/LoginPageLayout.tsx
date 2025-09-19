import { backInBounce, fadeInBottom, slideInSpace } from "@/theme/animations";
import { theme } from "@/theme/theme";
import styled from "styled-components";

type LoginPageLayoutProps = {
    children: React.ReactNode
}
export const LoginPageLayout = ({ children }: LoginPageLayoutProps) => {
    return (
        <LoginPageLayoutStyled>
            <div className="login-container-left-side">
                <div className="login-content">
                    {children}
                </div>
            </div>
        </LoginPageLayoutStyled>
    )
}

const LoginPageLayoutStyled = styled.div`
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
    
    @media (max-width: 1280px) {
        .login-container-left-side {
            width: 100%;
            justify-content: center;
        }
    }

    @media (max-width: 600px) {
        .login-container-left-side .login-content .login_page-logo {    
            transform: scale(1.4);
        }
    }
`;