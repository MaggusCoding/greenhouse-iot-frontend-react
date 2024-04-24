import {collection, query, getDocs, orderBy, limit, where, Timestamp} from 'firebase/firestore';
import { Temperature } from "../models/temperature";
import db from "../services/firebaseConfig"

export const getTemperatureData = async (): Promise<Temperature[]> => {
    const q = query(
        collection(db, "temperature"),
        orderBy("time", "asc") // or "desc", depending on how you want to display them
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Temperature) // Correctly cast the data to the Temperature interface
}));
};

export const getTemperatureDataLast24Hours = async (): Promise<Temperature[]> => {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago

    // Create a Firestore timestamp from the Date object
    const oneDayAgoTimestamp = Timestamp.fromDate(oneDayAgo);

    // Query to fetch temperatures from the last 24 hours and order them by time
    const q = query(
        collection(db, "temperature"),
        where("time", ">=", oneDayAgoTimestamp),
        orderBy("time", "asc") // or "desc", depending on how you want to display them
    );

    const snapshot = await getDocs(q);
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