import z from "zod"

export const loginFormSchema = z.object({
    username: z
        .string()
        .nonempty(`Veuillez entrer un prénom.`)
        .min(2, `Le prénom doit contenir au moins 2 caractères.`)
        .max(20, `Le prénom ne peut pas dépasser 20 caractères.`)
        .regex(/^[\p{L}_-]+$/u, `Le prénom ne doit contenir que des lettres ou '-', pas d'autres caractères spéciaux.`)
})