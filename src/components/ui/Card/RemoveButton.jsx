import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { theme } from "../../../theme";
import { fadeInRight } from "../../../theme/animations";

export const RemoveButton = ({ onClick }) => {
    return (
        <RemoveButtonStyled className='remove-button' onClick={onClick}>
            <TiDelete />
        </RemoveButtonStyled>
    )
}

const RemoveButtonStyled = styled.span`
    position: absolute;
    z-index: 2;
    right: 15px;
    top: 15px;
    animation: ${fadeInRight} ${theme.animations.speed.quick} ease-out;

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