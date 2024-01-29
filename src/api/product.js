import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncProducts = (userId, newProducts) => {
    const docRef = doc(db, 'users', userId)

    const newUserProducts = {
        username: userId,
        products: newProducts
    }

    setDoc(docRef, newUserProducts)
}