import {collection, getDocs } from 'firebase/firestore';
import { Temperature } from "../models/temperature";
import db from "../services/firebaseConfig"

export const getTemperatureData = async (): Promise<Temperature[]> => {
    const snapshot = await getDocs(collection(db, "temperature"));
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Temperature) // Correctly cast the data to the Temperature interface
}));
};
