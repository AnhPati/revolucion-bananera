import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
//@ts-ignore
import { getUser } from "./user"
import { Product } from "@/types/Product"

export const syncProducts = (userId: string, newProducts: Product[]) => {
    const docRef = doc(db, 'users', userId)

    const newUserProducts = {
        username: userId,
        products: newProducts
    }

    setDoc(docRef, newUserProducts)
}

export const getUserProducts = async (userId: string): Promise<Product[]> => {
    const userReceived = await getUser(userId)

    const userProducts: Product[] = userReceived.products

    return userProducts
}