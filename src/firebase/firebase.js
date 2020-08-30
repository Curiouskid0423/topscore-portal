import * as firebase from "firebase";
import "firebase/analytics";
import {studentInstance1,studentInstance2} from "../fixtures";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// TODO: Just some testing fixture data.
// db.ref("students_db").set(null);
// db.ref("students_db").push(studentInstance1);
// db.ref("students_db").push(studentInstance2);

export {firebase, googleAuthProvider, db as default };
