import { Logo } from './ui/Logo'
import { Button } from './ui/Button'
import { BsPersonCircle } from 'react-icons/bs'
import styled from 'styled-components'

const Navbar = ({ username }) => {

    return (
        <NavbarStyled>
            <Logo />
            <div className={'right-side'}>
                <div>
                    <p>Hey, {username}</p>
                    <Button text={`Déconnexion`} url={'/'} />
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
    
    .right-side {
        display: flex;
        align-items: centerF;
    }
`;