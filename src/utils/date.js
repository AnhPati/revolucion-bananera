export const formatDate = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const newDate = `${day}/${month}/${year} - ${hours}:${minutes}`

    return newDate
}