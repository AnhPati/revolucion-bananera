export const getDeepClone = (array) => JSON.parse(JSON.stringify(array))

export const find = (id, array) => array.find(item => item.id === id)

export const findIndex = (id, array) => array.findIndex(item => item.id === id)

export const filter = (id, array) => array.filter(item => item.id !== id)