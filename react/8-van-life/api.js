

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyAfTdXUITUttwCnbeUEa6bPWQknkeWLL4w",
    authDomain: "vanlife-a0d42.firebaseapp.com",
    projectId: "vanlife-a0d42",
    storageBucket: "vanlife-a0d42.firebasestorage.app",
    messagingSenderId: "391462205973",
    appId: "1:391462205973:web:03017436db3e9182a62c1c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getVans() {
    const vanCollection = collection(db, "vans");
    const snapshot = await getDocs(vanCollection);
    const vans = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        };
    });
    return vans;
}

export async function getVan(id) {
    const vanDoc = doc(db, "vans", id);
    const snapshot = await getDoc(vanDoc);
    const van = { id: snapshot.id, ...snapshot.data() };
    return van;
}


// Get all vans of hostId = "123"
export async function getHostVans() {
    const q = query(collection(db, "vans"), where("hostId", "==", "123"));
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        };
    });
    return vans;
}


// Check login user
export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}