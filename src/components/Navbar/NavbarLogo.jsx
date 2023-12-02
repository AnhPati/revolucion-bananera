import styled from "styled-components";
import { Logo } from "../ui/Logo"

export const NavbarLogo = () => {
    return (
        <NavbarLogoStyled href='\order'>
            <Logo className={'nav-logo'} />
        </NavbarLogoStyled>
    )
}

const NavbarLogoStyled = styled.a`
    .nav-logo {
        margin: 19px 0;
    }
`;