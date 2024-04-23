import {collection, query, getDocs, orderBy, limit  } from 'firebase/firestore';
import { Temperature } from "../models/temperature";
import db from "../services/firebaseConfig"

export const getTemperatureData = async (): Promise<Temperature[]> => {
    const snapshot = await getDocs(collection(db, "temperature"));
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Temperature) // Correctly cast the data to the Temperature interface
}));
};

export const getNewestTemperatureData = async (): Promise<Temperature[]> => {
    // Create a query against the collection, ordering by time descending and limiting to 1
    const q = query(collection(db, "temperature"), orderBy("time", "desc"), limit(1));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Temperature) // Correctly cast the data to the Temperature interface
    }));
};