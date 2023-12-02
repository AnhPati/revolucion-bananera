import { Logo } from './ui/Logo'
import { BsPersonCircle } from 'react-icons/bs'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../theme'

const Navbar = ({ username }) => {

    return (
        <NavbarStyled>
            <Logo className={'nav-logo'} />
            <div className={'right-side'}>
                <div className='text-container'>
                    <p>Hey, <span className='username'>{username}</span></p>
                    <Link to={'/'} >Se déconnecter</Link>
                </div>
                <div className={'icon-container'}>
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
        border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;

    .nav-logo {
        transform: none;
        margin: 19px 0;
    }
    
    .right-side {
        display: flex;
        align-items: center;

        .text-container {
            color: #747B91;
            text-align: end;

            p {
                font-size: 16px;
                margin: 0;

                .username {
                    color: ${theme.colors.primary};
                    font-weight: ${theme.fonts.weights.bold};
                }
            }

            a {
                color: #747B91;
                font-size: 10px;
                text-decoration: none;
            }
        }

        .icon-container {
            display: flex;
            align-items: end;
            margin-left: 10px;

            svg {
                color: #747B91;
                font-size: ${theme.fonts.size.P4};
            }
        }
    }
`;