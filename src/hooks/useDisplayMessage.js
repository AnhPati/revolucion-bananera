import { useState } from "react"

export const useDisplayMessage = () => {
    const [isAdding, setIsAdding] = useState(false)

    const displayMessage = () => {
        setIsAdding(true)
        setTimeout(() => {
            setIsAdding(false)
        }, 2000)
    }

    return { isAdding, displayMessage }
}