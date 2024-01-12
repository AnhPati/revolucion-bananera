import { TiDelete } from "react-icons/ti";
import styled from "styled-components";

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
            color: #E25549;
        }

    :active {
        color: #FFA01B;
    }

    svg {
        font-size: 30px;
        color: #FFA01B;
        cursor: pointer;
    }
`;