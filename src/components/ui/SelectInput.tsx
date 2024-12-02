import styled from "styled-components";
import { theme } from "../../theme";
import { ReactNode } from "react";

type SelectInputPropsType = {
    id: string,
    name: string,
    value: string,
    Icon: ReactNode,
    options: [
        {
            value: string,
            label: string
        }
    ],
    onChange: () => void,
    onFocus: () => void,
    onBlur: () => void
}

export const SelectInput = ({ id, name, value, Icon, options, onChange, onFocus, onBlur }: SelectInputPropsType) => {
    return (
        <SelectInputStyled>
            {Icon}
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            >
                {options.map(option => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </SelectInputStyled>
    )
}

const SelectInputStyled = styled.div`
    display: inline-flex;
    padding: ${theme.spacing.xs} 16px;
    align-items: center;
    gap: 13px;
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};

    select {
        width: 100%;
        background-color: ${theme.colors.background_white};
        border: none;
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.size.SM};

        &:focus-visible {
            outline: none;
        }
    }

    svg {
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.greyBlue};
    }
`;