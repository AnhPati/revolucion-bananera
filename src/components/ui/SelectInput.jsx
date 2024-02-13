import styled from "styled-components";

export const SelectInput = ({ id, name, value, Icon, options, onChange, onFocus, onBlur }) => {
    console.log(options)
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
    padding: 8px 16px;
    align-items: center;
    gap: 13px;
    background-color: #F5F5F7;
    border-radius: 5px;

    select {
        width: 100%;
        background-color: #F5F5F7;
        border: none;
        color: #17161A;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        &:focus-visible {
            outline: none;
        }
    }

    svg {
        font-size: 16px;
        color: #747B91;
    }
`;