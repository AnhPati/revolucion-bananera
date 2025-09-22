export const validateLoginForm = (username: string): string | null => {
    if (!username.trim()) return `Veuillez entrer un prénom.`

    const numberOfChar = username.length
    if (numberOfChar < 2) return `Le prénom doit contenir au moins 2 caractères.`
    if (numberOfChar > 20) return `Le prénom ne peut pas dépasser 20 caractères.`

    const validUsername = /^[a-zA-Z-]+$/
    if (!validUsername.test(username)) return `Le prénom ne doit contenir que des lettres ou '-', pas d'autres caractères spéciaux.`

    return null
}