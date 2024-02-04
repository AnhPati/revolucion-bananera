import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (userId) => {
    const docRef = doc(db, 'users', userId)

    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()

        return userReceived

    }
}

export const createUser = async (userId) => {
    const docRef = doc(db, 'users', userId)

    const newUser = {
        username: userId,
        products: fakeMenu.LARGE
    }

    await setDoc(docRef, newUser)

    return newUser
}

export const authenticateUser = async (userId) => {
    const existingUser = await getUser(userId)

    if (!existingUser) {
        return await createUser(userId)
    }

    return existingUser
}