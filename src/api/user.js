import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (userId) => {
    const docRef = doc(db, 'users', userId)

    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()

        return userReceived

    } else {
        const errorUser = `L'utilisateur n'existe pas.`

        return errorUser
    }
}

export const createUser = (username) => {
    const userId = username + '_' + crypto.randomUUID()

    const docRef = doc(db, 'users', userId)

    const newUser = {
        username: username,
        products: fakeMenu.LARGE
    }

    setDoc(docRef, newUser)
}