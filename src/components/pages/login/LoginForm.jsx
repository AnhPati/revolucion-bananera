import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import styled from "styled-components"
import { theme } from "../../../theme/index"
import { TextInput } from "../../ui/TextInput";
import { Button } from "../../ui/Button";
import { authenticateUser } from "../../../api/user";

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await authenticateUser(username)
        setUsername('')
        navigate('/order', {
            state: {
                userName: username
            }
        })
    }

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous :</h2>
            <TextInput
                value={username}
                onChange={handleChange}
                placeholder={'Entrer votre prénom'}
                required
                Icon={<BsPersonCircle />}
            />
            <Button
                label={'Accéder à mon espace'}
                Icon={<IoChevronForward />}
            />
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    width: ${theme.gridUnit * 50}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.SM};

    h1 {
        font-size: ${theme.fonts.size.P5};
        font-weight: ${theme.fonts.weights.bold};
    }

    h2 {
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        margin-bottom: ${theme.spacing.sm}
    }

    hr {
        width: 100%;
        border: solid 1.5px ${theme.colors.loginLine};
    }
`