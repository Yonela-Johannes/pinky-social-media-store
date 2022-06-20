import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//     apiKey: REACT_APP_FIREBASE_API_KEY,
//     authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyCn5xBGSOpNCLykJhdlbBJAR0b007fZpk4",
    authDomain: "bepleasuredbypinky.firebaseapp.com",
    databaseURL: "https://bepleasuredbypinky-default-rtdb.firebaseio.com",
    projectId: "bepleasuredbypinky",
    storageBucket: "bepleasuredbypinky.appspot.com",
    messagingSenderId: "21402435076",
    appId: "1:21402435076:web:a3da593fdb36b822837f51"
};



const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage, db };