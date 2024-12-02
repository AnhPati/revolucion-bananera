import { ErrorButton } from "../ui/ErrorButton"

const ErrorPage = () => {
    return (
        <div>
            <h1>ErrorPage</h1>
            <ErrorButton text={`Retour à la page d'accueil`} url={'/'} />
        </div>
    )
}

export default ErrorPage