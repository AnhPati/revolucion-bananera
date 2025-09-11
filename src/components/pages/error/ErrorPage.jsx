import { Button } from "../../ui/Button"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ErrorContent } from "./ErrorContent"

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleHomepageReturn = () => {
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate('/')
        }
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
    background: #f5f5f7;

    .button-container {
        width: 100px;
    }
`;