import { Button } from '../Button'
import styled from 'styled-components';
import { theme } from "@/theme/theme";
import { QuantityButton } from '../QuantityButton';

type CardDescriptionProps = {
    leftDescription: string,
    onAdd?: React.MouseEventHandler<HTMLButtonElement>,
    onRemove?: React.MouseEventHandler<HTMLButtonElement>,
    isUnavailable?: boolean,
    quantity: number
}

export const CardDescription = ({ leftDescription, onAdd, onRemove, isUnavailable, quantity }: CardDescriptionProps) => {
    return (
        <CardDescriptionStyled>
            <p className='left-description'>
                {leftDescription}
            </p>
            <div className={'add_button-container'}>
                {
                    quantity > 0 ?
                        <QuantityButton onAdd={onAdd} onRemove={onRemove} quantity={quantity} isDisabled={isUnavailable} />
                        :
                        <Button label={'Ajouter'} onClick={onAdd} disabled={isUnavailable} />
                }
            </div>
        </CardDescriptionStyled>
    )
}

const CardDescriptionStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: auto;

    .left-description {
        margin: 0;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P0};
        font-weight: ${theme.fonts.weights.regular};
        line-height: 22px;
    }

    .add_button-container {
        width: 95px;

        button {
            padding-top: ${theme.gridUnit * 1.5}px;
            padding-bottom: ${theme.gridUnit * 1.5}px;
        }
    }
`;