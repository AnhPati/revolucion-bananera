import { collection, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getOrders = async () => {
    const collectionRef = collection(db, 'orders')
    const collectionSnapshot = await getDocs(collectionRef)

    console.log('Firebase snapshot empty?', collectionSnapshot.empty)
    console.log('Firebase snapshot size:', collectionSnapshot.size)

    if (!collectionSnapshot.empty) {
        const orders = []
        collectionSnapshot.forEach(doc => {
            console.log('Document trouvé:', doc.id, doc.data())
            orders.push({ id: doc.id, ...doc.data() })
        })
        console.log('Total orders récupérés:', orders.length)
        return orders
    }
    
    return []
}

export const syncOrders = async (order) => {
    const docRef = doc(db, 'orders', order.id)

    const newOrder = order

    await setDoc(docRef, newOrder)

    return getOrders()
}

export const deleteOrder = async (orderId) => {
    const docRef = doc(db, 'orders', orderId)

    await deleteDoc(docRef)
}