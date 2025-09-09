import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components";
import { theme } from "@/theme/theme";

type CasinoEffectProps = {
    count: string
}

export const CasinoEffect = ({ count }: CasinoEffectProps) => {
    return (
        <TransitionGroup component={CasinoEffectStyled}>
            <CSSTransition
                key={count}
                classNames={'casino-count'}
                timeout={300}
            >
                <span>{count}</span>
            </CSSTransition>
        </TransitionGroup>
    )
}

const CasinoEffectStyled = styled.div`
    position: relative;
    overflow-y: hidden;

    span {
        display: inline-block;

        &.casino-count-enter {
            transform: translateY(50px);
            opacity: 0%;
        }

        &.casino-count-enter-active {    
                transform: translateY(0);
                transition: ${theme.animations.speed.extraQuick};;
                opacity: 100%;
        }

        &.casino-count-exit {
                position: absolute;
                bottom:0;
                right: 0;
                transform: translateY(0);     
                opacity: 100%;
        }

        &.casino-count-exit-active {  
            transform: translateY(-50px);
            opacity: 0%;  
            transition: ${theme.animations.speed.quick};;
        }
    }
`;