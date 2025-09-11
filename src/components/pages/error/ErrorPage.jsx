import { Button } from "../../ui/Button"
import { useNavigate } from "react-router-dom"
import logo from "../../../assets/logo-orange.png"

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
            <div>
                <div>
                    <h1>
                        4
                    </h1>
                    <div className={'img-container'}>
                        <img src={logo} alt={'Crazee Burger logo'} />
                    </div>
                    <h1>
                        4
                    </h1>
                </div>
                <div>
                    <h2>Il semblerait que tu tourne en rond après une frite...</h2>
                    <p>Je te propose de remettre les pieds dans le plat.</p>
                </div>
            </div>
            <div>
                <Button label={`Retour`} onClick={handleHomepageReturn} />
            </div>

        </div>
    )
}

export default ErrorPage