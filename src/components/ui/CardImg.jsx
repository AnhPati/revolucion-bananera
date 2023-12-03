import styled from "styled-components";

export const CardImg = ({ src, alt }) => {
    return (
        <CardImgStyled>
            <img src={src} alt={alt} />
        </CardImgStyled>
    )
}

const CardImgStyled = styled.div`
    height: 145px;
    width: 200px;
    text-align: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;