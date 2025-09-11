import { css, keyframes } from "styled-components";
import { theme } from "./theme";

export const AdminPanelAnimation = css`
    &.admin_panel-animation-appear {
        transform: translateY(250px);
        opacity: 0%;
    }

    &.admin_panel-animation-appear-active {    
        transform: translateY(0);
        transition: ${theme.animations.speed.quick} ease-out;
        opacity: 100%;
    }
`

export const fadeInTop = keyframes`
    0% {
        transform: translateY(-40%);
        opacity: 0%;
    }

    100% {
        transform: translateY(0%);
        opacity: 100%;
    }
`

export const fadeInRight = keyframes`
    0% {
        transform: translateX(40%);
        opacity: 0%;
    }

    100% {
        transform: translateX(0%);
        opacity: 100%;
    }
`

export const fadeInBottom = keyframes`
    0% {
        transform: translateY(40%);
        opacity: 0%;
    }

    100% {
        transform: translateX(0%);
        opacity: 100%;
    }
`

export const fadeInLeft = keyframes`
    0% {
        transform: translateX(-40%);
        opacity: 0%;
    }

    100% {
        transform: translateX(0%);
        opacity: 100%;
    }
`

export const pulse = keyframes`
    0% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
`

export const bounceIn = keyframes`
    0% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
`

export const backInBounce = keyframes`
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
`

export const slideInSpace = (appearValue: string, midValue: string, endValue: string) => keyframes`
    0% {
        transform: translateX(${appearValue});
    }

    50% {
        transform: translateX(${midValue});
    }

    100% {
        transform: translateX(${endValue});
    }
`

export const slideInDown = (appearValue: string, endValue: string) => keyframes`
    0% {
        transform: translateY(${appearValue});
        opacity: 0;
    }

    100% {
        transform: translateY(${endValue});
        opacity: 1;
    }
`

export const ImgPreviewAnimation = css`
    &.img_preview-animation-appear {
        opacity: 0%;
    }

    &.img_preview-animation-appear-active {
        transition: ${theme.animations.speed.normal};
        opacity: 100%;
    }

    &.img_preview-animation-enter {
        opacity: 0%;
    }

    &.img_preview-animation-enter-active {
        transition: ${theme.animations.speed.normal};
        opacity: 100%;
    }

    &.img_preview-animation-exit {
        opacity: 100%;
    }

    &.img_preview-animation-exit-active {
        opacity: 0%;
    }
`;

export const ProductCardAnimation = css`
    .product-card-enter {
        transform: translateX(-120px);
        opacity: 10%;
    }

    .product-card-enter-active {    
        transform: translateX(0);
        transition: ${theme.animations.speed.extraQuick} ease-out;
        opacity: 100%;
    }

    .product-card-exit {
        transform: translateX(0);
        opacity: 100%;
    }

    .product-card-exit-active {   
        transition: ${theme.animations.speed.extraQuick} ease-out;
        opacity: 10%;
    }
`;

export const BasketProductAnimation = css`
    .basket_product-animation-appear {
        transform: translateX(100px);
        opacity: 0%;
    }

    .basket_product-animation-appear-active {    
        transform: translateX(0);
        transition: ${theme.animations.speed.extraQuick} ease-out;
        opacity: 100%;
    }

    .basket_product-animation-enter {
        transform: translateX(100px);
        opacity: 0%;
    }

    .basket_product-animation-enter-active {    
        transform: translateX(0);
        transition: ${theme.animations.speed.extraQuick} ease-out;
        opacity: 100%;
    }

    .basket_product-animation-exit {    
        transform: translateX(0);     
        opacity: 100%;
    }

    .basket_product-animation-exit-active {  
        transform: translateX(-100px);
        opacity: 0%;  
        transition: ${theme.animations.speed.extraQuick} ease-in;
    }
`;

export const OverlayMessageAnimation = css`
    
    .overlay-message-animation-enter {
        .layer-animation {           
            opacity: 0%; 
        }

        .message-animation {
            opacity: 0%; 
            transform: translateY(-100%);
        }
    }

    .overlay-message-animation-enter-active {
        .layer-animation {
            opacity: 50%; 
            transition: ${theme.animations.speed.extraQuick} ease-out;
        }

        .message-animation {
            opacity: 100%; 
            transform: translateY(0%); 
            transition: ${theme.animations.speed.extraQuick} ease-out;
        }
    }

    .overlay-message-animation-exit {
        .layer-animation {    
        opacity: 50%;
        }

        .message-animation {
            opacity: 100%; 
            transform: translateY(0%);
        }
    }

    .overlay-message-animation-exit-active {
        .layer-animation {
            opacity: 0%;  
            transition: ${theme.animations.speed.extraQuick} ease-in;
        }

        .message-animation {
            opacity: 0%; 
            transform: translateY(100%);  
            transition: ${theme.animations.speed.extraQuick} ease-in;
        }
    }
`