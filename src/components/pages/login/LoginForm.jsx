import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import styled from "styled-components"
import { theme } from "../../../theme/index"
import { TextInput } from "../../ui/TextInput";

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
            <button>Accéder à mon espace <IoChevronForward /></button>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
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
        width: 400px;
        border: solid 1.5px ${theme.colors.primary};
    }

    

    button {
        width: 400px;
        border-radius: ${theme.borderRadius.round};
        padding-top: 18px;
        padding-bottom: 18px;
    }

    button {
        color: ${theme.colors.white};
        font-weight: ${theme.weights.bold};
        background: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.primary_burger};
        cursor: pointer;

        > svg {
            margin-bottom: -2px;
        }

        &:hover {
            color: ${theme.colors.primary_burger};
            background: ${theme.colors.white};
        }

        &:focus {
            color: ${theme.colors.white};
            background: ${theme.colors.primary_burger};
        }
    }
`