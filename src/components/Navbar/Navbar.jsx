import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { NavbarLogo } from './NavbarLogo'
import { NavbarProfile } from './NavbarProfile'
import { theme } from '../../theme'

const Navbar = () => {
    const location = useLocation()
    const username = location.state.userName

    return (
        <NavbarStyled>
            <NavbarLogo />
            <NavbarProfile username={username} />
        </NavbarStyled>
    )
}

export default Navbar

const NavbarStyled = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    background: ${theme.colors.white};

    a {
        text-decoration: none;
    }
`;