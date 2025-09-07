import styled from "styled-components"
import { theme } from "../../theme"

export const Modal = ({
    children,
    overlayColor = theme.colors.primary,
    overlayOpacity = "50%",
    containerMaxWidth = "600px",
    containerWidth = "90%"

}) => {
    return (
        <ModalStyled
            overlayColor={overlayColor}
            overlayOpacity={overlayOpacity}
            containerMaxWidth={containerMaxWidth}
            containerWidth={containerWidth}
        >
            <div className="modal-layer layer-animation"></div>
            <div className="modal-container message-animation">
                {children}
            </div>
        </ModalStyled>
    )
}

const ModalStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    z-index: 3;

    .modal-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${props => props.overlayColor};
        opacity: ${props => props.overlayOpacity};
    }

    .modal-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background: ${theme.colors.background_white};
        color: ${theme.colors.greyBlue};
        z-index: 1;
        width: ${props => props.containerWidth};
        max-width: ${props => props.containerMaxWidth};        
    }
`