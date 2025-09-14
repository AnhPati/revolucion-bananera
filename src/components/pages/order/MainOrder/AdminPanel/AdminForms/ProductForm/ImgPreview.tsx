import styled, { css } from "styled-components";
import { theme } from "@/theme/theme";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ImgPreviewAnimation } from "@/theme/animations";

type ImgPreviewProps = {
    src: string,
    alt: string
}

export const ImgPreview = ({ src, alt }: ImgPreviewProps) => {
    return (
        <ImgPreviewStyled $empty={src ? false : true}>
            {src ? (
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={alt}
                        appear={true}
                        classNames={'img_preview-animation'}
                        timeout={{ enter: 1000, exit: 0 }}
                    >
                        <img src={src} alt={alt} />
                    </CSSTransition>
                </TransitionGroup>
            ) : (
                <p>Aucune image</p>
            )
            }
        </ImgPreviewStyled >
    )
}

type ImgPreviewStyledProps = {
    $empty: boolean
}

const ImgPreviewStyled = styled.div<ImgPreviewStyledProps>`
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100px;
        max-height: 100px;

        ${ImgPreviewAnimation}
    }

    p {
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.greySemiDark};
    }

    ${({ $empty }) => $empty && ImgEmptyStyles}
`;

const ImgEmptyStyles = css`
    border: solid 1px ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
`