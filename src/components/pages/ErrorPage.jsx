import { Button } from "../utils/Button"

const ErrorPage = () => {
    return (
        <div>
            <h1>ErrorPage</h1>
            <Button text={`Retour à la page d'accueil`} url={'/'} />
        </div>
    )
}

export default ErrorPage