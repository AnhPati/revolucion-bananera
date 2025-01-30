import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getOrders = async () => {
    const collectionRef = collection(db, 'orders')
    const collectionSnapshot = await getDocs(collectionRef)

    if (!collectionSnapshot.empty) {
        const orders = []
        collectionSnapshot.forEach(doc => orders.push({ id: doc.id, ...doc.data() }))

        return orders
    }
}

export const syncOrders = async (order) => {
    const docRef = doc(db, 'orders', order.id)

    const newOrder = {
        orderId: order.id,
        order: order
    }

    await setDoc(docRef, newOrder)

    return newOrder
}