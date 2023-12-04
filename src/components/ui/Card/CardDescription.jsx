import { PrimaryButton } from '../PrimaryButton'
import styled from 'styled-components';
import { theme } from '../../../theme';

export const CardDescription = ({ leftDescription }) => {
    return (
        <CardDescriptionStyled>
            <p>
                {leftDescription}
            </p>
            <div className={'add_button-container'}>
                <PrimaryButton label={'Ajouter'} />
            </div>
        </CardDescriptionStyled>
    )
}

const CardDescriptionStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 7.5px;

    p {
        margin: 0;
        color: ${theme.colors.primary};
        font-size: 16px;
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