import styled from "styled-components";
import { theme } from "../../../../../theme";

export const AdminPanelNavbarButton = ({ onClick, className, id, Icon, label }) => {
    return (
        <AdminPanelNavbarButtonStyled>
            <button onClick={onClick} className={className} id={id}>
                {Icon}
                {label && <span className="nav-text">{label}</span>}
            </button>
        </AdminPanelNavbarButtonStyled>
    )
}

const AdminPanelNavbarButtonStyled = styled.li`
    button {
        height: 45px;
        padding: 10px 22px 11px 22px;
        background-color: ${theme.colors.white};
        font-family: 'Open Sans';
        color: #93A2B1;
        font-size: 14px;
        border: 1px solid #E4E5E9;
        border-radius: 5px 5px 0px 0px;
        cursor: pointer;

        svg {
            width: 16px;
            height: 16px;
        }

        .nav-text {
            margin-left: 10px;
            margin-right: 10px;
            padding-bottom: 3.5px;
        }

        &:hover {
            .nav-text {
                border-bottom: #93A2B1 solid 2px;
            }

            &.tab-active {
                .nav-text {
                    border-bottom: ${theme.colors.white} solid 2px;
                }
            }       
        }

        &.tab-active {
            background-color: #000;
            color: ${theme.colors.white};
            border: #000;
        }
    }
`;