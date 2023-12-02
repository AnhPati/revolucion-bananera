import { useLocation } from "react-router-dom"
import { Button } from "../ui/Button"
import Navbar from "../Navbar"

const OrderPage = () => {
    const location = useLocation()
    const username = location.state.userName

    return (
        <div>
            <Navbar username={username} />
            <h1>Bonjour {username}</h1>
            <br />
            <Button text={`Déconnexion`} url={'/'} />
        </div>
    )
}

export default OrderPage