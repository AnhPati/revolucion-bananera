import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>ErrorPage</h1>
            <button onClick={handleClick}>{`Retour à la page d'accueil`}</button>
        </div>
    )
}

export default ErrorPage