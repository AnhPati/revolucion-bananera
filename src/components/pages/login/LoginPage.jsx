import { useState } from "react"

const LoginPage = () => {
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
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous :</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    type="text"
                    placeholder="Entrer votre prénom :"
                    onChange={handleChange}
                    required
                />
                <button>Accéder à votre espace</button>
            </form>
        </div>
    )
}

export default LoginPage