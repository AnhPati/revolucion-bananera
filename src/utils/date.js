export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); // 🔥 Correction ici
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
};

export const parseDate = (stringDate) => {
    const [day, month, year, hours, minutes] = stringDate.match(/\d+/g).map(Number);
    return new Date(year, month - 1, day, hours, minutes); // Month est 0-indexé en JS
};