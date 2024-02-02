import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { getUser } from "./user"

export const syncProducts = (userId, newProducts) => {
    const docRef = doc(db, 'users', userId)

    const newUserProducts = {
        username: userId,
        products: newProducts
    }

    setDoc(docRef, newUserProducts)
}

export const getUserProducts = async (userId) => {
    const userReceived = await getUser(userId)

    const userProducts = userReceived.products

    return userProducts
}