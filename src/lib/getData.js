import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';


export async function getData(collectionName) {
    let colRef = collection(db, collectionName);
    let snapshot = await getDocs(colRef);
    return snapshot;
}