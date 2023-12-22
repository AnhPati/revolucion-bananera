import styled from 'styled-components';
import { theme } from '../../../theme';
import { CardImg } from './CardImg';
import { CardInfos } from './CardInfos';
import { TiDelete } from 'react-icons/ti'

export const Card = ({ id, imgSrc, title, leftDescription }) => {
    return (
        <CardStyled key={id} id={id} className={'card'}>
            <span className='remove-button'>
                <TiDelete />
            </span>
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

        svg {
            font-size: 30px;
            color: #FFA01B;
            cursor: pointer;

            :hover {
                color: #E25549;
            }
        }
    }
`;