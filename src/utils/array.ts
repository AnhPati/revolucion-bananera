type ProductType = {
    id: string,
    title: string,
    imageSource: string,
    price: string,
    quantity: number,
    isAvailable: boolean,
    isPublicised: boolean
}

export const getDeepClone = (array: Array<ProductType>) => JSON.parse(JSON.stringify(array))

export const findObjectById = (id: string, array: Array<ProductType>) => array.find(item => item.id === id)

export const findIndexById = (id: string, array: Array<ProductType>) => array.findIndex(item => item.id === id)

export const filterArrayWithId = (id: string, array: Array<ProductType>) => array.filter(item => item.id !== id)

export const isEmptyArray = (array: Array<ProductType>) => array.length === 0