import styled from 'styled-components';
import { theme } from '../../../theme';
import { CardImg } from './CardImg';
import { CardInfos } from './CardInfos';
import { TiDelete } from 'react-icons/ti'

export const Card = ({ id, imgSrc, title, leftDescription, hasDeleteButton, onDelete, isAdminMode, onClick, selected }) => {

    return (
        <CardStyled key={id} id={id} className={isAdminMode ? selected ? 'admin-mode selected' : 'admin-mode' : ''} onClick={onClick}>
            {hasDeleteButton && (
                <span className='remove-button' onClick={onDelete}>
                    <TiDelete />
                </span>
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
        }

        &:active, &.selected {
            background-color: #FFA01B;
            transform: scale(1.05);

            .remove-button {
                svg {
                    color: #FFF;
                }
            }

            p {
                color: #FFF;
            }

            button {
                background-color: #FFF;
                color: #FFA01B
            }
        }
    }

    .remove-button {
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
    }
`;