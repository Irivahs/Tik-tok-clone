import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2I0xU_nKOPSptJMrxrxZ7WNp8h1WKirk",
    authDomain: "tik-tokclone-b9a27.firebaseapp.com",
    projectId: "tik-tokclone-b9a27",
    storageBucket: "tik-tokclone-b9a27.appspot.com",
    messagingSenderId: "752225974663",
    appId: "1:752225974663:web:48be83e245743425ce3b22",
    measurementId: "G-HNWD7LX0T0"
};

const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;