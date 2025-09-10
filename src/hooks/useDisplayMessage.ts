import { useState } from "react"

export const useDisplayMessage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const displayMessage = () => {
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
        }, 2000)
    }

    return { isSubmitting, displayMessage }
}