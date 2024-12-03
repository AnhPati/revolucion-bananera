import styled from "styled-components";
import { fadeInTop } from "../../../theme/animations";
import { theme } from "../../../theme";

type CardImgPropsType = {
    src: string,
    alt: string,
    isUnavailable: boolean,
    unavailableImage: string
}

export const CardImg = ({ src, alt, isUnavailable, unavailableImage }: CardImgPropsType) => {
    return (
        <CardImgStyled>
            {isUnavailable && (
                <div className="unavailable-container">
                    <div className="unavailable-layer"></div>
                    <img src={unavailableImage} alt='Rupture de stock' />
                </div>
            )}
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
        object-fit: contain;
    }

    .unavailable-container {
        .unavailable-layer {
            background: white;
            opacity: 0.7;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: ${theme.borderRadius.extraRound};
        }

        img {
            position: absolute;
            top: 0;
            left: 20px;
            width: 80%;
            height: 100%;
            animation: ${fadeInTop} ${theme.animations.speed.quick} ease-out;
        }
    }
`;