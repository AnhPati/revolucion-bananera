import styled from "styled-components";
import { theme } from "../../theme";
import { ReactNode } from "react";

type TabPropsType = {
    onClick: () => void,
    className: string,
    id: string,
    Icon: ReactNode,
    label: string
}

export const Tab = ({ onClick, className, id, Icon, label }: TabPropsType) => {

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
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P0};
    white-space: nowrap;
    border: 1px solid ${theme.colors.greyLight};
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
            border-bottom: ${theme.colors.greySemiDark} solid 2px;
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