import styled from "styled-components";
import { LoginForm } from "./LoginForm"
import background from "@/assets/burger-right-background.jpg"
import { Logo } from "@/components/ui/Logo";
import { CopyrightContainer } from "./CopyrightContainer";
import { LoginPageLayout } from "./LoginPageLayout";

const LoginPage = () => {
    return (
        <LoginPageStyled>
            <LoginPageLayout>
                <Logo className={'login_page-logo'} />
                <LoginForm />
            </LoginPageLayout>
            <CopyrightContainer />
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
`;