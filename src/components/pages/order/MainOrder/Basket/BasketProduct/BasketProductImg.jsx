import styled from "styled-components";

export const BasketProductImg = ({ src, alt }) => {
    return (
        <BasketProductImgStyled>
            <img src={src} alt={alt} />
        </BasketProductImgStyled>
    )
}

const BasketProductImgStyled = styled.div`
    height: 70px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;