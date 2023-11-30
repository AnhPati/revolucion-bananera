import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
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
            <hr />
            <h2>Connectez-vous :</h2>
            <div className="icon_placeholder-wrapper">
                <BsPersonCircle />
                <input
                    value={inputValue}
                    type="text"
                    placeholder="Entrer votre prénom"
                    onChange={handleChange}
                    required
                />
            </div>
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

    .icon_placeholder-wrapper {
        position: relative;

        > svg {
            position: absolute;
            top: 30px;
            color: ${theme.colors.greyBlue};
            left: 35px;
            height: 15px;
            width: 15px;
        }
    }

    input,
    button {
        width: 400px;
        border-radius: ${theme.borderRadius.round};
        padding-top: 18px;
        padding-bottom: 18px;
    }

    input {
        color: ${theme.colors.dark};
        font-weight: ${theme.weights.regular};
        padding-left: 46px;
        padding-right: 24px;
        margin: ${theme.spacing.sm};
        border: none;

        &::placeholder {
            color: ${theme.colors.greyUltraLight};
        }

        &:focus-visible {
            outline: none;

            &::placeholder {
                color: transparent;
            }
        }
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