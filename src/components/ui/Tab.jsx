import styled from "styled-components";
import { theme } from "../../theme";

export const Tab = ({ onClick, className, tabSelected, id, Icon, label }) => {

    return (
        <TabStyled onClick={onClick} className={className ? className : ''} id={id}>
            {Icon}
            {label && <span className="nav-text">{label}</span>}
        </TabStyled >
    )
}

const TabStyled = styled.button`
    display: flex;
    align-items: center;
    height: 45px;
    padding: 10px 22px 11px 22px;
    background-color: ${theme.colors.white};
    font-family: 'Open Sans';
    color: #93A2B1;
    font-size: ${theme.fonts.size.P0};
    border: 1px solid #E4E5E9;
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round}  0px 0px;
    box-shadow: ${theme.shadows.subtle};
    cursor: pointer;

    .nav-text {
        margin-left: 13px;
        margin-right: 13px;
        padding-bottom: 3.5px;
    }

    &:hover {
        border-bottom-color: ${theme.colors.white};

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
        background-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
        border-color: ${theme.colors.background_dark};
    }
`;