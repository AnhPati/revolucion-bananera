import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme/index"

export const LoginForm = () => {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue('')
        navigate('/order', {
            state: {
                userName: inputValue
            }
        })
    }

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous :</h2>
            <input
                value={inputValue}
                type="text"
                placeholder="Entrer votre prénom :"
                onChange={handleChange}
                required
            />
            <button>Accéder à votre espace</button>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;

    h1 {
        font-size: ${theme.fonts.P5};
        font-weight: ${theme.weights.bold};
    }

    h2 {
        font-size: ${theme.fonts.P4};
        font-weight: ${theme.weights.bold};
    }
`;