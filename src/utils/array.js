export const getDeepClone = (array) => JSON.parse(JSON.stringify(array))

export const find = (id, array) => array.find(item => item.id === id)