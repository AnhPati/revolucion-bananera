import { rotate } from "@/theme/animations";
import { theme } from "@/theme/theme";
import { RiLoader4Line } from "react-icons/ri"
import styled from "styled-components";

export const Loader = () => {
    return (
        <>
            <LoaderStyled />
        </>
    )
}
const LoaderStyled = styled(RiLoader4Line)`
    animation: ${rotate} ${theme.animations.speed.normal} infinite ease-in-out;
`;