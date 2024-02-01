export const syncBasketProducts = (userId, newProducts) => {
    localStorage.setItem(userId, JSON.stringify(newProducts))
}