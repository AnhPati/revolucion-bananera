import { Logo } from './ui/Logo'
import { BsPersonCircle } from 'react-icons/bs'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = ({ username }) => {

    return (
        <NavbarStyled>
            <Logo className={'nav-logo'} />
            <div className={'right-side'}>
                <div>
                    <p>Hey, {username}</p>
                    <Link to={'/'} >Se déconnecter</Link>
                </div>
                <div>
                    <BsPersonCircle />
                </div>
            </div>
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
    padding-right: 70px;

    .nav-logo {
        transform: none;
    }
    
    .right-side {
        display: flex;
        align-items: center;
    }
`;