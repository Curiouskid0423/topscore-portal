import {db, firebase, googleAuthProvider} from "../firebase/firebase";
import {submitMessage} from "./utility";

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

export const setUserDB = (usersList) => ({
    type: "SET_USER_DB",
    usersList
})

export const startSetUserDB = () => {
    return (dispatch, getState) => {
        return db.ref("users_db").once("value", (snapshot) => {
            const usersList = [];
            snapshot.forEach((child) => {
              usersList.push({
                  id: child.key,
                  ...child.val()
              })
            });
            dispatch(setUserDB(usersList))
        }).catch((e) => {
            console.log("Error Message from startSetUserDB: ", e);
        })
    }
}

export const addNewUser = (userObj) => ({
    type: "ADD_NEW_USER",
    userObj
});

export const startAddNewUser = (userObj) => {
    return (dispatch, getState) => {
        return db.ref("users_db").push(userObj).then((ref) => {
            dispatch(addNewUser({
                id: ref.key,
                ...userObj
            }));
            dispatch(submitMessage("success"));
        }).catch(() => dispatch(submitMessage("error")));
    }
}