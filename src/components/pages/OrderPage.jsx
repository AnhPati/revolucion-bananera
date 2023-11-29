import { useLocation } from "react-router-dom"
import { Button } from "../utils/Button"

const OrderPage = () => {
    const location = useLocation()
    const userName = location.state.userName

    return (
        <div>
            <h1>Bonjour {userName}</h1>
            <br />
            <Button text={`Déconnexion`} url={'/'} />
        </div>
    )
}

export default OrderPage