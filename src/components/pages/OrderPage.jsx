import { useLocation } from "react-router-dom"
import { Button } from "../ui/Button"
import NavBar from "../NavBar"

const OrderPage = () => {
    const location = useLocation()
    const userName = location.state.userName

    return (
        <div>
            <NavBar />
            <h1>Bonjour {userName}</h1>
            <br />
            <Button text={`Déconnexion`} url={'/'} />
        </div>
    )
}

export default OrderPage