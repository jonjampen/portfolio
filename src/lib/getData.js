import { db } from "./firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

export async function getData(collectionName, slug = null) {
    let colRef = collection(db, collectionName);
    let snapshot;

    if (!slug) {
        snapshot = await getDocs(colRef);
    } else {
        let q = query(colRef, where("slug", "==", `${slug}`));
        snapshot = await getDocs(q);
    }

    return snapshot;
}
