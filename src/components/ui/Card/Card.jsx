import styled from 'styled-components';
import { theme } from '../../../theme';
import { CardImg } from './CardImg';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
import { CardInfos } from './CardInfos';

export const Card = ({ product }) => {
    return (
        <CardStyled key={product.id} className={'card'}>
            <CardImg src={product.imageSource} alt={product.title} />
            <CardInfos />
            <CardTitle title={product.title} />
            <CardDescription price={product.price} />

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