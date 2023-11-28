import { useLocation } from "react-router-dom"

const OrderPage = () => {
    const location = useLocation()
    const userName = location.state.userName

    return (
        <div>
            <h1>Bonjour {userName}</h1>
            <br />
            <button>Déconnexion</button>
        </div>
    )
}

export default OrderPage