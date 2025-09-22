import { theme } from '@/theme/theme';
import styled from 'styled-components';

export const MessageLoader = () => {
    return (
        <MessageLoaderStyled>
            <h1>Chargement en cours ...</h1>
        </MessageLoaderStyled>
    )
}

const MessageLoaderStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        margin: 0;
    }
`;