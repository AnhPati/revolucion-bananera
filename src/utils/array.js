export const getDeepClone = (array) => JSON.parse(JSON.stringify(array))

export const findObjectById = (id, array) => array.find(item => item.id === id)

export const findIndexById = (id, array) => array.findIndex(item => item.id === id)

export const filterArrayWithId = (id, array) => array.filter(item => item.id !== id)

export const isEmptyArray = (array) => array.length === 0