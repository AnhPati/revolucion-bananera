import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";

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
        color: ${theme.colors.greySemiDark};
    }

    ${({ $empty }) => $empty && ImgEmptyStyles}
`;

const ImgEmptyStyles = css`
    border: solid 1px ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
`