import { useState } from "react"

export const LoginForm = () => {
    // state
    const [inputValue, setInputValue] = useState('')

    // comportements
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Bonjour ${inputValue}`)
        setInputValue('')
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