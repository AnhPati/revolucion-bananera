import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { RiLoader4Line } from "react-icons/ri";
import styled, { css } from "styled-components"
import { theme } from "@/theme/theme"
import { TextInput } from "@/components/ui/TextInput";
import { Button } from "@/components/ui/Button";
import { authenticateUser } from "@/api/user";
import { LoginFormTitle } from "./LoginFormTitle";
import { rotate } from "@/theme/animations";
import { validateLoginForm } from "./helpers/validateLoginForm";

export const LoginForm = () => {
    const [username, setUsername] = useState<string>('')
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const loginError = validateLoginForm(username)
        if (loginError) return setErrorMessage(loginError)

        setIsSubmitting(true)

        const userReceived = await authenticateUser(username)

        setUsername('')
        navigate('/order', {
            state: {
                username: userReceived.username
            }
        })
    }

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit} $isSubmitting={isSubmitting} noValidate>
            <LoginFormTitle />
            <TextInput
                value={username}
                onChange={handleChange}
                placeholder={'Entrer votre prénom'}
                required
                Icon={BsPersonCircle}
            />
            {errorMessage && <span className="error-soumission-message">{errorMessage}</span>}
            {isSubmitting ? (
                <Button
                    Icon={RiLoader4Line}
                />
            ) : (
                <Button
                    label={'Accéder à mon espace'}
                    Icon={IoChevronForward}
                />
            )}
        </LoginFormStyled>
    )
}

type LoginFormStyledProps = {
    $isSubmitting: boolean
}

const LoginFormStyled = styled.form<LoginFormStyledProps>`
    width: ${theme.gridUnit * 50}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.SM};

    ${(({ $isSubmitting }) => $isSubmitting && submittingStyles)}
`

const submittingStyles = css`
    button {
        svg {
            animation: ${rotate} ${theme.animations.speed.normal} infinite ease-in-out;
        }
    }
`