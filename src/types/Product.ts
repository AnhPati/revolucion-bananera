export type Product = {
    id: string,
    imageSource: string,
    title: string,
    price: number,
    quantity: number,
    isAvailable: boolean,
    isPublicised: boolean
}

export type BasketProduct = {
    id: string,
    quantity: number
} & Partial<Product>