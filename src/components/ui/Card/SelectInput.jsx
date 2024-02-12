import styled from "styled-components";

export const SelectInput = ({ id, value, name, Icon, onChange, firstOptionName, firstOptionValue, secondOptionName, secondOptionValue }) => {
    return (
        <SelectInputStyled>
            {Icon}
            <select
                onChange={onChange}
                name={name}
                id={id}
                value={value}
            >
                <option value={firstOptionValue}>
                    {firstOptionName}
                </option>
                <option value={secondOptionValue}>
                    {secondOptionName}
                </option>
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