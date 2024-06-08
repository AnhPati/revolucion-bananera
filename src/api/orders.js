import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase-config"

export const getOrders = async () => {
    const collectionRef = collection(db, 'orders')
    const docsSnapshot = await getDocs(collectionRef)

    if (!docsSnapshot.empty) {
        const orders = []
        docsSnapshot.forEach(doc => orders.push({ id: doc.id, ...doc.data() }))

        return orders
    }
}