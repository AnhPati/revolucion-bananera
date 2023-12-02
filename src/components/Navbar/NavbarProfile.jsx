import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { theme } from '../../theme';


export const NavbarProfile = ({ username }) => {
    return (
        <NavbarProfileStyled className={'right-side'}>
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
`;