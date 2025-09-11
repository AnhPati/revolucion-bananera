import styled from "styled-components";
import { Logo } from "../../ui/Logo";

export const ErrorLogo = () => {
    return (
        <LogoStyled>
            <Logo
                className="error_page-logo"
                leftLabel="4"
                rightLabel="4"
            />
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    margin-top: 50px;

    .error_page-logo {
        transform: scale(3.5);
            margin: 40px 0;

            h1 {
                font-size: 60px;
            }
    }
`;