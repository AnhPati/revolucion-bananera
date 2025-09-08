import styled from "styled-components";
import logo from "./../../assets/logo-orange.png"
import { theme } from "../../theme/theme";

type LogoProps = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Logo = ({ className, onClick }: LogoProps) => {
    return (
        <LogoStyled className={className} onClick={onClick}>
            <h1>
                Crazee
            </h1>
            <div className={'img-container'}>
                <img src={logo} alt={'Crazee Burger logo'} />
            </div>
            <h1>
                Burger
            </h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};

    h1 {
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        line-height: 1.5px;
        margin: 0;
    }

    .img-container {
        width: 80px;
        height: 60px;
        margin: 0 ${theme.gridUnit * 0.625}px;

        img {
            width: 100%;
        }
    }
`;