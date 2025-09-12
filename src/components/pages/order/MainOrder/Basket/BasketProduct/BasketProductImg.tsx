import styled from "styled-components";

type BasketProductImgProps = {
    src?: string,
    alt?: string
}

export const BasketProductImg = ({ src, alt }: BasketProductImgProps) => {
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