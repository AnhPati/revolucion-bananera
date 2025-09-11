import { Button } from "../../ui/Button"
import { useNavigate } from "react-router-dom"
import logo from "../../../assets/logo-orange.png"
import styled from "styled-components"
import { theme } from "../../../theme"

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
        <ErrorPageStyled>
            <div className="error-content-container">
                <div className="error-logo-container">
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
                <div className="error-text-container">
                    <h2>Il semblerait que tu tourne en rond après une frite...</h2>
                    <p>Je te propose de remettre les pieds dans le plat.</p>
                </div>
            </div>
            <div className="button-container">
                <Button label={`Retour`} onClick={handleHomepageReturn} />
            </div>

        </ErrorPageStyled>
    )
}

export default ErrorPage

const ErrorPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #f5f5f7;
    
    .error-content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .error-logo-container {
            display: flex;
            align-items: center;
            color: ${theme.colors.primary};
        
            h1 {
                font-size: 200px;
                font-weight: ${theme.fonts.weights.bold};
                line-height: 1.5px;
                margin: 0;
            }
        
            .img-container {
                width: 240px;
                height: 180px;
                margin: 0 ${theme.gridUnit * 0.625}px;
        
                img {
                    width: 100%;
                }
            }
        }

        .error-text-container {
            margin: 50px 0;
            text-align: center;

            h2 {
                font-size: 30px;
            }
        }
    }

    .button-container {
        width: 100px;
    }
`;