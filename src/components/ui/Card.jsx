import { PrimaryButton } from './PrimaryButton'
import { formatPrice } from "../../utils/maths";
import styled from 'styled-components';
import { theme } from '../../theme';
import { CardImg } from './CardImg';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
export const Card = ({ product }) => {
    return (
        <CardStyled key={product.id} className={'card'}>
            <CardImg src={product.imageSource} alt={product.title} />
            <CardTitle title={product.title} />
            <CardDescription />
            <div className={'card-description'}>
                <p>
                    {formatPrice(product.price)}
                </p>
                <div className={'add_button-container'}>
                    <PrimaryButton label={'Ajouter'} />
                </div>
            </div>
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

    .card-description {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        margin-top: 7.5px;

        p {
            margin: 0;
            color: #FFA01B;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
        }

        .add_button-container {
            width: 95px;

            button {
                padding-top: ${theme.gridUnit * 1.5}px;
                padding-bottom: ${theme.gridUnit * 1.5}px;
            }
        }
    }
`;