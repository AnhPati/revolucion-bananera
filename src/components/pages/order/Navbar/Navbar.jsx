import styled from 'styled-components'
import { Logo } from '../../../ui/Logo'
import { windowRefresh } from '../../../../utils/windowsRefresh'
import { theme } from '../../../../theme'
import NavbarRightSide from './NavbarRightSide'

const Navbar = () => {
    return (
        <NavbarStyled>
            <Logo className={'nav-logo'} onClick={windowRefresh} />
            <NavbarRightSide />
        </NavbarStyled>
    )
}

export default Navbar

const NavbarStyled = styled.nav`
    width: 100%;
    height: 10vh;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    background: ${theme.colors.white};

    a {
        text-decoration: none;
    }
    
    .nav-logo {
        margin: 19px 0;
        cursor: pointer;
    }
`;