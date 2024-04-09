import { Button } from '../Button'
import styled from 'styled-components';
import { theme } from '../../../theme';
import { QuantityButton } from '../QuantityButton';

export const CardDescription = ({ leftDescription, onClick, isUnavailable, quantity }) => {
    return (
        <CardDescriptionStyled>
            <p className='left-description'>
                {leftDescription}
            </p>
            <div className={'add_button-container'}>
                <QuantityButton onClick={onClick} quantity={quantity} />
                {/* <Button label={'Ajouter'} onClick={onClick} isDisabled={isUnavailable} /> */}
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

        /* button {
            padding-top: ${theme.gridUnit * 1.5}px;
            padding-bottom: ${theme.gridUnit * 1.5}px;
        } */
    }
`;