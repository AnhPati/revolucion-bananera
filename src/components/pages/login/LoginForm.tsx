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
import { loginFormSchema } from "./validators/loginFormValidator";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

type Status = "success" | "loading" | "error" | "idle"

export const LoginForm = () => {
    const [username, setUsername] = useState<string>('')
    const [status, setStatus] = useState<Status>("idle")
    const [errorMessage, setErrorMessage] = useState<string>('')
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        const validation = loginFormSchema.safeParse({ username })
        if (!validation.success) {
            setStatus("error")
            setErrorMessage(validation.error.issues[0].message)
            return
        }

        setStatus("loading")
        const userReceived = await authenticateUser(username)

        setTimeout(() => {

            setUsername('')
            navigate('/order', {
                state: {
                    username: userReceived.username
                }
            })

            setStatus("success")
        }, 2000)
    }

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit} $isSubmitting={status === "loading"} noValidate>
            <LoginFormTitle />
            <TextInput
                value={username}
                onChange={handleChange}
                placeholder={'Votre prénom'}
                required
                Icon={BsPersonCircle}
            />
            {status === "error" && (
                <ErrorMessage
                    className={"error-soumission-message"}
                    message={errorMessage}
                />
            )}
            {status === "loading" ? (
                <Button
                    Icon={RiLoader4Line}
                    isLoading={true}
                    disabled
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

    .error-soumission-message {
        text-align: center;
        margin-bottom: ${theme.spacing.sm};
        color: ${theme.colors.loginLine};
    }

    @media (max-width: 600px) {
        width: ${theme.gridUnit * 40}px;
    }

    ${(({ $isSubmitting }) => $isSubmitting && submittingStyles)}
`

const submittingStyles = css`
    button {
        svg {
            animation: ${rotate} ${theme.animations.speed.normal} infinite ease-in-out;
        }
    }
`