export const getDeepClone = <T>(array: T[]): T[] => JSON.parse(JSON.stringify(array))

export const findObjectById = <T extends { id: string }>(id: string, array: T[]): T | undefined => array.find(item => item.id === id)

export const findIndexById = <T extends { id: string }>(id: string, array: T[]): number => array.findIndex(item => item.id === id)

export const filterArrayWithId = <T extends { id: string }>(id: string, array: T[]): T[] => array.filter(item => item.id !== id)

export const isEmptyArray = <T>(array: T[]): boolean => array.length === 0