import z from "zod"

export const validateLoginForm = (username: string): string | null => {
    if (!username.trim()) return `Veuillez entrer un prénom.`

    const numberOfChar = username.length
    if (numberOfChar < 2) return `Le prénom doit contenir au moins 2 caractères.`
    if (numberOfChar > 20) return `Le prénom ne peut pas dépasser 20 caractères.`

    const validUsername = /^[a-zA-Z-]+$/
    if (!validUsername.test(username)) return `Le prénom ne doit contenir que des lettres ou '-', pas d'autres caractères spéciaux.`

    return null
}

export const loginFormSchema = z.object({
    username: z
        .string()
        .nonempty(`Veuillez entrer un prénom.`)
        .min(2, `Le prénom doit contenir au moins 2 caractères.`)
        .max(20, `Le prénom ne peut pas dépasser 20 caractères.`)
        .regex(/^[\p{L}_-]+$/u, `Le prénom ne doit contenir que des lettres ou '-', pas d'autres caractères spéciaux.`)
})