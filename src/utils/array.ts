export const getDeepClone = <T>(array: T[]): T[] => JSON.parse(JSON.stringify(array))

type ID = string | number

export const findObjectById = <T extends { id: ID }>(id: ID, array: T[]): T | undefined => array.find(item => item.id === id)

export const findIndexById = <T extends { id: ID }>(id: ID, array: T[]): number => array.findIndex(item => item.id === id)

export const filterArrayWithId = <T extends { id: ID }>(id: ID, array: T[]): T[] => array.filter(item => item.id !== id)

export const isEmptyArray = (array: []): boolean => array.length === 0