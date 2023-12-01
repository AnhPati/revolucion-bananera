import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import styled from "styled-components"
import { theme } from "../../../theme/index"
import { TextInput } from "../../ui/TextInput";
import { PrimaryButton } from "../../ui/PrimaryButton";

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
            <hr />
            <h2>Connectez-vous :</h2>
            <TextInput
                value={inputValue}
                onChange={handleChange}
                placeholder={'Entrer votre prénom'}
                required
                Icon={<BsPersonCircle />}
            />
            <PrimaryButton
                label={'Accéder à mon espace'}
                Icon={<IoChevronForward />}
            />
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};

    h1 {
        font-size: ${theme.fonts.P5};
        font-weight: ${theme.weights.bold};
    }

    h2 {
        font-size: ${theme.fonts.P4};
        font-weight: ${theme.weights.bold};
        margin-bottom: ${theme.spacing.sm}
    }

    hr {
        width: 100%;
        border: solid 1.5px ${theme.colors.primary};
    }
`