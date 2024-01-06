import styled from "styled-components";
import { theme } from "../../../../../theme";

export const ImgPreview = ({ src, alt }) => {
    return (
        <ImgPreviewStyled>
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
    border: solid 1px #E4E5E9;
    border-radius: ${theme.borderRadius.round};

    img {
        max-width: 100px;
        max-height: 100px;
    }

    p {
        font-size: 16px;
        color: #93A2B1;
    }
`;