import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/analytics";
import {studentInstance1,
    studentInstance2,
    studentInstance3,
    studentInstance4,
    studentInstance5,
    studentInstance6,
    courseInstance1,
    courseInstance2,
    courseInstance3,
    courseInstance4,
    courseInstance5,
    courseInstance6,
    courseInstance7,
    courseInstance8} from "../fixtures";


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
db.ref("students_db").set(null);
db.ref("students_db").push(studentInstance1);
db.ref("students_db").push(studentInstance2);
db.ref("students_db").push(studentInstance3);
db.ref("students_db").push(studentInstance4);
db.ref("students_db").push(studentInstance5);
db.ref("students_db").push(studentInstance6);

// TODO: Fixture data to Firebase "courses_db"
// db.ref("courses_db").set(null);
// db.ref("courses_db").push(courseInstance1);
// db.ref("courses_db").push(courseInstance2);
// db.ref("courses_db").push(courseInstance3);
// db.ref("courses_db").push(courseInstance4);
// db.ref("courses_db").push(courseInstance5);
// db.ref("courses_db").push(courseInstance6);
// db.ref("courses_db").push(courseInstance7);
// db.ref("courses_db").push(courseInstance8);

export {firebase, googleAuthProvider, db as default };
