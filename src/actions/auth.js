import { firebase, googleAuthProvider } from "../firebase/firebase";

/**
 * @desc Mind the difference between Asynchronous actions
 * versus Synchronous actions.
 */

export const login = (uid, nameInitial) => ({
    type: "LOGIN",
    uid,
    nameInitial
});

export const startLogin = (e) => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () => ({ type: "LOGOUT" });

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}