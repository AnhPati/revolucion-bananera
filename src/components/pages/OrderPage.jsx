import { useLocation } from "react-router-dom"
import { Button } from "../ui/Button"
import NavBar from "../NavBar"

const OrderPage = () => {
    const location = useLocation()
    const username = location.state.userName

    return (
        <div>
            <NavBar username={username} />
            <h1>Bonjour {username}</h1>
            <br />
            <Button text={`Déconnexion`} url={'/'} />
        </div>
    )
}

export default OrderPage