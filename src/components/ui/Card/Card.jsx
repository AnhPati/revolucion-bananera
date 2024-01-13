import styled from 'styled-components';
import { theme } from '../../../theme';
import { CardImg } from './CardImg';
import { CardInfos } from './CardInfos';
import { RemoveButton } from './RemoveButton';

export const Card = ({ id, imgSrc, title, leftDescription, hasDeleteButton, onDelete, isHoverable, onClick, selected }) => {

    return (
        <CardStyled key={id} id={id} className={isHoverable ? selected ? 'admin-mode selected' : 'admin-mode' : ''} onClick={onClick}>
            {hasDeleteButton && (
                <RemoveButton onClick={onDelete} />
            )}
            <CardImg src={imgSrc} alt={title} />
            <CardInfos title={title} leftDescription={leftDescription} />
        </CardStyled>
    )
}

const CardStyled = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 330px;
    width: 240px;
    background: ${theme.colors.white};
    padding: 50px ${theme.spacing.md} 10px ${theme.spacing.md};
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};

    &.admin-mode {
        cursor: pointer;
        transition: box-shadow 0.4s;
        
        &:hover {
            box-shadow: 0px 0px 8px 0px ${theme.colors.primary};          
            transform: scale(1.05);
        }

        &:active, &.selected {
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
        }
    }
`