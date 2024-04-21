import { format } from 'date-fns';
import {Timestamp} from 'firebase/firestore';
const formatFirestoreTimestamp = (firestoreTimestamp : Timestamp) => {
    const jsDate = firestoreTimestamp.toDate();
    return format(jsDate, 'dd.MM.yyyy, HH:mm');
};

export default formatFirestoreTimestamp;