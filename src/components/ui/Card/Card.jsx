import styled from 'styled-components';
import { theme } from '../../../theme';
import { CardImg } from './CardImg';
import { CardInfos } from './CardInfos';

export const Card = ({ id, imgSrc, title, price }) => {
    return (
        <CardStyled key={id} id={id} className={'card'}>
            <CardImg src={imgSrc} alt={title} />
            <CardInfos title={title} price={price} />
        </CardStyled>
    )
}

const CardStyled = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 330px;
    width: 240px;
    background: ${theme.colors.white};
    padding: 50px 20px 10px 20px;
    box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.20);
    border-radius: ${theme.borderRadius.extraRound};
`;