import { css, keyframes } from "styled-components";
import { theme } from ".";

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
        transform: translateX(100%);
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