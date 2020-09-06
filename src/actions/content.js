/**
 * @desc An action file for individual student's content fetching.
 */
import database from "../firebase/firebase";

// Synchronous action.
export const setContent = (content) => {
    return {
        type: "SET_CONTENT",
        content
    }
}

// Asynchronous action.
export const startSetContent = (id) => {
    return (dispatch, getState) => {
        return database.ref(`students_db/${id}/content`)
            .once("value", (snapshot)=>{
                console.log(snapshot.val());
                dispatch(setContent(snapshot.val()));
        }).catch((e) => {
            console.log("Failed to load in contact info. Here's why: ", e);
        });
    }
}