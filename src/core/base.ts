import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/** Your web app's Firebase configuration */
const firebaseConfig = {
    apiKey: "AIzaSyDCHBi2DhRmuVXkSxfvY00SleiCeAf7LD8",
    authDomain: "spa-book-catalog.firebaseapp.com",
    projectId: "spa-book-catalog",
    storageBucket: "spa-book-catalog.appspot.com",
    messagingSenderId: "497835206317",
    appId: "1:497835206317:web:2ff9febeb31a572da30824"
};

/**  Initialize Firebase */
const app = initializeApp(firebaseConfig);

/**  create a db */
export const db = getFirestore(app);