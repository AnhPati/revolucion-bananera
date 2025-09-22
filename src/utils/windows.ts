export const windowRefresh = () => {
    window.location.reload()
}

export const setLocalStorage = <T>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getLocalStorage = (key: string): unknown | null => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
}