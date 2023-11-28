import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
    // state
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    // comportements
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

    // render
    return (
        <form action="submit" onSubmit={handleSubmit}>
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
        </form>
    )
}