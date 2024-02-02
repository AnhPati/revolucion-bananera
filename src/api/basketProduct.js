export const syncBasketProducts = (userId, newProducts) => {
    localStorage.setItem(userId, JSON.stringify(newProducts))
}

export const getUserBasketProducts = (userId) => {
    const basketProducts = JSON.parse(localStorage.getItem(userId))
    return basketProducts
}