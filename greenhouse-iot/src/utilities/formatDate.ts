import { format } from 'date-fns';
import {Timestamp} from 'firebase/firestore';
const formatFirestoreTimestamp = (firestoreTimestamp : Timestamp) => {
    const jsDate = firestoreTimestamp.toDate();
    return format(jsDate, 'yyyy-MM-dd');
};

export default formatFirestoreTimestamp;