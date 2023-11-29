import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../utils/Button"

const OrderPage = () => {
    const location = useLocation()
    const userName = location.state.userName
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Bonjour {userName}</h1>
            <br />
            <Button text={`Déconnexion`} onClick={handleClick} />
        </div>
    )
}

export default OrderPage