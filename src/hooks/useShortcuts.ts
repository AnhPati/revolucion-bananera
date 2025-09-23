import { useEffect } from "react"

export const useKeyboardShortcuts = (key: string, callbackAction: () => void) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isModKey = e.metaKey || e.ctrlKey
            if (isModKey && e.key.toLowerCase() === key.toLowerCase()) {
                e.preventDefault()
                callbackAction()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [key, callbackAction])
}