import {Timestamp} from 'firebase/firestore';

export interface Temperature{
    id?: string;
    time: Timestamp;
    temperature: number;
}