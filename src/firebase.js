import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD08yMuDCgtZawgunUqkbyz3KGVrtFAtC0",
    authDomain: "ecommercetest-4b5aa.firebaseapp.com",
    projectId: "ecommercetest-4b5aa",
    storageBucket: "ecommercetest-4b5aa.appspot.com",
    messagingSenderId: "771760311608",
    appId: "1:771760311608:web:bf2e3cbc8599d0211d85cd"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}