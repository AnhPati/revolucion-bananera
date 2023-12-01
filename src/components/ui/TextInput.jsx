import styled from "styled-components";
import { theme } from "../../theme";

export const TextInput = ({ value, onChange, Icon, ...optionalsProps }) => {
    return (
        <TextInputStyled className="icon_placeholder-wrapper">
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

    > svg {
        position: absolute;
        top: 30px;
        color: ${theme.colors.greyBlue};
        left: 35px;
        height: 15px;
        width: 15px;
    }

    input {
        width: 400px;
        border-radius: ${theme.borderRadius.round};
        padding-top: 18px;
        padding-bottom: 18px;
        color: ${theme.colors.dark};
        font-weight: ${theme.weights.regular};
        padding-left: 46px;
        padding-right: 24px;
        margin: ${theme.spacing.sm};
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