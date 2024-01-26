import { BsPersonCircle } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';
import { theme } from '../../../../theme';


export const NavbarProfile = () => {
    const location = useLocation()
    const username = location.state.userName

    return (
        <NavbarProfileStyled>
            <div className='text-container'>
                <p>Hey, <span className='username'>{username}</span></p>
                <Link to={'/'} >Se déconnecter</Link>
            </div>
            <div className={'icon-container'}>
                <BsPersonCircle />
            </div>
        </NavbarProfileStyled>
    )
}

const NavbarProfileStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    padding-left: 50px;

    .text-container {
        color: ${theme.colors.greyBlue};
        text-align: end;

        p {
            font-size: ${theme.fonts.size.P0};
            margin: 0;

            .username {
                color: ${theme.colors.primary};
                font-weight: ${theme.fonts.weights.bold};
            }
        }

        a {
            color: ${theme.colors.greyBlue};
            font-size: ${theme.fonts.size.XXS};

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .icon-container {
        display: flex;
        align-items: end;
        margin-left: 10px;

        svg {
            color: ${theme.colors.greyBlue};
            font-size: ${theme.fonts.size.P4};
        }
    }
`;