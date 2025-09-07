import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { theme } from "../../theme";
import { fadeInRight } from "../../theme/animations";

export const IconButton = ({ onClick, Icon = <TiDelete /> }) => {
    return (
        <IconButtonStyled className='icon-button' onClick={onClick}>
            {Icon}
        </IconButtonStyled>
    )
}

const IconButtonStyled = styled.span`
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