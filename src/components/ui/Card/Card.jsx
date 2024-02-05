import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { CardImg } from './CardImg';
import { CardInfos } from './CardInfos';
import { RemoveButton } from './RemoveButton';

export const Card = ({ id, imgSrc, title, leftDescription, hasDeleteButton, onDelete, isHoverable, onClick, selected, onAdd }) => {

    return (
        <CardStyled key={id} id={id} onClick={onClick} $isHoverable={isHoverable} $isSelected={selected}>
            {hasDeleteButton && (
                <RemoveButton onClick={onDelete} />
            )}
            <CardImg src={imgSrc} alt={title} />
            <CardInfos title={title} leftDescription={leftDescription} onClick={onAdd} />
        </CardStyled>
    )
}

const CardStyled = styled.li`
    ${({ $isHoverable }) => $isHoverable && hoverableStyles}

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 330px;
    width: 240px;
    background: ${theme.colors.white};
    padding: 50px ${theme.spacing.md} 19.25px ${theme.spacing.md};
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};

    ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyles}
`

const hoverableStyles = css`
    cursor: pointer;
    transition: box-shadow 0.4s;
    
    &:hover {
        box-shadow: ${theme.shadows.orangeHighlight};          
        transform: scale(1.05);
    }    
`

const selectedStyles = css`
    background-color: ${theme.colors.primary};

    .remove-button {
        z-index: 10;
        svg {
            color: ${theme.colors.white};
        }

        :active {
            color: ${theme.colors.white};
        }
    }

    p {
        color: ${theme.colors.white};
    }

    button {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        z-index: 10;

        &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            border-color: ${theme.colors.white};
        }

        &:active {
            color: ${theme.colors.primary};
            background: ${theme.colors.white};
        }
    }
`