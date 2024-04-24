import { format } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

export const formatFirestoreTimestampDate = (firestoreTimestamp: Timestamp) => {
    const jsDate = firestoreTimestamp.toDate();
    return format(jsDate, 'yyyy-MM-dd');
};

export const formatFirestoreTimestampHour = (firestoreTimestamp: Timestamp) => {
    const jsDate = firestoreTimestamp.toDate();
    // Use 'HH' for 24-hour format and 'mm' for minutes
    return format(jsDate, 'HH:mm');
};

