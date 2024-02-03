import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const ImgPreview = ({ src, alt }) => {
    return (
        <ImgPreviewStyled $empty={src ? false : true}>
            {src ? (
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={alt}
                        appear={true}
                        classNames={'img-preview'}
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

const ImgPreviewStyled = styled.div`
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100px;
        max-height: 100px;

        &.img-preview-appear {
            opacity: 0%;
        }

        &.img-preview-appear-active {
            transition: 1s;
            opacity: 100%;
        }

        &.img-preview-enter {
            opacity: 0%;
        }

        &.img-preview-enter-active {
            transition: 1s;
            opacity: 100%;
        }

        &.img-preview-exit {
            opacity: 100%;
        }

        &.img-preview-exit-active {
            opacity: 0%;
        }
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