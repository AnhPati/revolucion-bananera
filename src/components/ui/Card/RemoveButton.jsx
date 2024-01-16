import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { theme } from "../../../theme";

export const RemoveButton = ({ onClick }) => {
    return (
        <RemoveButtonStyled className='remove-button' onClick={onClick}>
            <TiDelete />
        </RemoveButtonStyled>
    )
}

const RemoveButtonStyled = styled.span`
    position: absolute;
    right: 15px;
    top: 15px;

    :hover {
            color: ${theme.colors.red};
        }

    :active {
        color: ${theme.colors.primary};
    }

    svg {
        font-size: 30px;
        color: ${theme.colors.primary};
        cursor: pointer;
    }
`;