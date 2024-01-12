import styled from 'styled-components';
import { theme } from '../../../theme';
import { CardImg } from './CardImg';
import { CardInfos } from './CardInfos';
import { RemoveButton } from './RemoveButton';

export const Card = ({ id, imgSrc, title, leftDescription, hasDeleteButton, onDelete, isAdminMode, onClick, selected }) => {

    return (
        <CardStyled key={id} id={id} className={isAdminMode ? selected ? 'admin-mode selected' : 'admin-mode' : ''} onClick={onClick}>
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
            background-color: #FFA01B;

            .remove-button {
                z-index: 10;
                svg {
                    color: #FFF;
                }

                :active {
                    color: #FFF;
                }
            }

            p {
                color: #FFF;
            }

            button {
                background-color: #FFF;
                color: #FFA01B;
                z-index: 10;

                &:hover {
                    background-color: #FFA01B;
                    color: #FFF;
                    border-color: #FFF;
                }

                &:active {
                    color: ${theme.colors.primary};
                    background: ${theme.colors.white};
                }
            }
        }
    }
`