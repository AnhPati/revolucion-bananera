export const EMPTY_PRODUCT = Object.freeze({
    id: '',
    title: '',
    imageSource: '',
    price: '',
    isAvailable: true,
    isPublicised: false
})

export const DEFAULT_IMG = '/images/coming-soon.png'
export const UNAVAILABLE_PRODUCT_IMG = '/images/stock-epuise.png'

export const BASKET_MESSAGE = {
    EMPTY: 'Votre commande est vide.',
    LOADING: 'Chargement en cours ...',
    UNAVAILABLE: 'Non disponible'
}