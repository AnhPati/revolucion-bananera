import { Button } from "@/components/ui/Button"
import { useNavigate } from "react-router-dom"

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
        <div>
            <h1>ErrorPage</h1>
            <Button label={`Retour à la page d'accueil`} onClick={handleHomepageReturn} />
        </div>
    )
}

export default ErrorPage