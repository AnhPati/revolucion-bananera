import styled from "styled-components";
import { Logo } from "@/components/ui/Logo";
import { slideInDown } from "@/theme/animations";
import { theme } from "@/theme/theme";

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
            font-size: ${theme.fonts.size.P6};
            &:first-child {
                animation: ${slideInDown("-300px", "0%")} ${theme.animations.speed.quick} ease-out;
                animation-delay: 0ms;
                animation-fill-mode: backwards;
            }
    
            &:last-child {
                animation: ${slideInDown("-300px", "0%")} ${theme.animations.speed.quick} ease-out;
                animation-delay: ${theme.animations.speed.normal};
                animation-fill-mode: backwards;
            }          
        }
        
        .img-container {
            animation: ${slideInDown("-300px", "0%")} ${theme.animations.speed.quick} ease-out;
            animation-delay: ${theme.animations.speed.quick};
            animation-fill-mode: backwards;
        }
    }
`;