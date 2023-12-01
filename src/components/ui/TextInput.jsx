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
        top: 17.5px;
        color: ${theme.colors.greyBlue};
        left: 20px;
        height: 15px;
        width: 15px;
    }

    input {
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        padding-top: 18px;
        padding-bottom: 18px;
        color: ${theme.colors.dark};
        font-weight: ${theme.weights.regular};
        padding-left: 46px;
        padding-right: 24px;
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