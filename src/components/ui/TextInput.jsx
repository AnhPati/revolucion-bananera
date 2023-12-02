import styled from "styled-components";
import { theme } from "../../theme";

export const TextInput = ({ value, onChange, Icon, ...optionalsProps }) => {
    return (
        <TextInputStyled>
            {Icon && Icon}
            <input
                value={value}
                onChange={onChange}
                type="text"
                {...optionalsProps}
            />
        </TextInputStyled>
    )
}

const TextInputStyled = styled.div`
    position: relative;
    width: 100%;
    margin: ${theme.spacing.sm} 0;

    > svg {
        position: absolute;
        top: ${theme.gridUnit * 2.25}px;
        left: ${theme.gridUnit * 2.5}px;
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P0};
    }

    input {
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        padding-top: ${theme.gridUnit * 2.25}px;
        padding-bottom: ${theme.gridUnit * 2.25}px;
        color: ${theme.colors.dark};
        font-weight: ${theme.fonts.weights.regular};
        padding-left: ${theme.gridUnit * 5.75}px;
        padding-right: ${theme.gridUnit * 3}px;
        border: none;

        &::placeholder {
            color: ${theme.colors.greyUltraLight};
        }

        &:focus-visible {
            outline: none;

            &::placeholder {
                color: transparent;
            }
        }
    }
`;