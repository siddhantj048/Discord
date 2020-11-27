import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBp8ElOYH4yLP22hchKJy8CC6p7ahGyAAE",
    authDomain: "discord-933ef.firebaseapp.com",
    databaseURL: "https://discord-933ef.firebaseio.com",
    projectId: "discord-933ef",
    storageBucket: "discord-933ef.appspot.com",
    messagingSenderId: "811152972620",
    appId: "1:811152972620:web:37deb9f9bdd5117dd8cde9",
    measurementId: "G-PWX9VX5G06"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;