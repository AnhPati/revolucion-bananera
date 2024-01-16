import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";

export const ImgPreview = ({ src, alt }) => {
    return (
        <ImgPreviewStyled $empty={src ? false : true}>
            {src ? (
                <img src={src} alt={alt} />
            ) : (
                <p>Aucune image</p>
            )}
        </ImgPreviewStyled>
    )
}

const ImgPreviewStyled = styled.div`
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100px;
        max-height: 100px;
    }

    p {
        font-size: 16px;
        color: #93A2B1;
    }

    ${({ $empty }) => $empty && ImgEmptyStyles}
`;

const ImgEmptyStyles = css`
    border: solid 1px #E4E5E9;
    border-radius: ${theme.borderRadius.round};
`