// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDwAdKR2TxZpEufUfuUy_uhELXlffSNMLs",
    authDomain: "postfeed-ea660.firebaseapp.com",
    projectId: "postfeed-ea660",
    storageBucket: "postfeed-ea660.appspot.com",
    messagingSenderId: "819779058686",
    appId: "1:819779058686:web:2053f44ede1f8f5352deaf",
    measurementId: "G-1NY1ZV333D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
export const storage = getStorage(app);