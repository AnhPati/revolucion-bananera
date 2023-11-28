import { useLocation, useNavigate } from "react-router-dom"

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
            <button onClick={handleClick}>Déconnexion</button>
        </div>
    )
}

export default OrderPage