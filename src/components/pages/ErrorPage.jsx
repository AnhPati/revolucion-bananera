import { useNavigate } from "react-router-dom"
import { Button } from "../utils/Button"

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>ErrorPage</h1>
            <Button text={`Retour à la page d'accueil`} onClick={handleClick} />
        </div>
    )
}

export default ErrorPage