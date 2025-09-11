import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import styled from "styled-components"
import { theme } from "@/theme/theme"
import { TextInput } from "@/components/ui/TextInput";
import { Button } from "@/components/ui/Button";
import { authenticateUser } from "@/api/user";
import { LoginFormTitle } from "./LoginFormTitle";

export const LoginForm = () => {
    const [username, setUsername] = useState<string>('')
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const userReceived = await authenticateUser(username)

        setUsername('')
        navigate('/order', {
            state: {
                username: userReceived.username
            }
        })
    }

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <LoginFormTitle />
            <TextInput
                value={username}
                onChange={handleChange}
                placeholder={'Entrer votre prénom'}
                required
                Icon={BsPersonCircle}
            />
            <Button
                label={'Accéder à mon espace'}
                Icon={IoChevronForward}
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
`