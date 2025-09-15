import { Button } from "@/components/ui/Button"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "@/theme/theme";
import { ErrorContent } from "./ErrorContent"

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleHomepageReturn = () => {
        navigate('/')
    }

    return (
        <ErrorPageStyled>
            <ErrorContent />
            <div className="button-container">
                <Button label={`Retour`} onClick={handleHomepageReturn} />
            </div>
        </ErrorPageStyled>
    )
}

export default ErrorPage

const ErrorPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.background_white};

    .button-container {
        width: 100px;
    }
`;