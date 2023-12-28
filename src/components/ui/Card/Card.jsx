import styled from 'styled-components';
import { theme } from '../../../theme';
import { CardImg } from './CardImg';
import { CardInfos } from './CardInfos';
import { TiDelete } from 'react-icons/ti'
import AdminContext from '../../../contexts/AdminContext';
import { useContext } from 'react';

export const Card = ({ id, imgSrc, title, leftDescription }) => {
    const { handleDeleteProduct, adminMode } = useContext(AdminContext)
    const isAdminMode = adminMode.isAdminMode
    return (
        <CardStyled key={id} id={id} className={'card'}>
            {isAdminMode && (
                <span className='remove-button' onClick={handleDeleteProduct}>
                    <TiDelete />
                </span>
            )}
            <CardImg src={imgSrc} alt={title} />
            <CardInfos title={title} leftDescription={leftDescription} />
        </CardStyled>
    )
}

const CardStyled = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 330px;
    width: 240px;
    background: ${theme.colors.white};
    padding: 50px ${theme.spacing.md} 10px ${theme.spacing.md};
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};

    .remove-button {
        position: absolute;
        right: 15px;
        top: 15px;

        :hover {
                color: #E25549;
            }

        svg {
            font-size: 30px;
            color: #FFA01B;
            cursor: pointer;
        }
    }
`;