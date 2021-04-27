import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCeePMYvwncuhWMBJZNb6uMDnQzuSE4Rc4",
    authDomain: "clone-c6527.firebaseapp.com",
    databaseURL: "https://clone-c6527.firebaseio.com",
    projectId: "clone-c6527",
    storageBucket: "clone-c6527.appspot.com",
    messagingSenderId: "822773942353",
    appId: "1:822773942353:web:77c53808418a69b42f1070",
    measurementId: "G-H3LBH36G0K"
};


const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export { db, auth};