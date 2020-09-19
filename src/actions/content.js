/**
 * @desc An action file for individual student's content fetching.
 */
import database from "../firebase/firebase";
import {submitMessage} from "./utility";

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

export const updateOverview = (overview) => ({
    type: "UPDATE_OVERVIEW", overview
});

export const startUpdateOverview = (overviewObj, id) => {
    return (dispatch, getState) => {
        return database.ref(`students_db/${id}/content/partOverview/atAGlance`)
            .update(overviewObj).then(() => {
                dispatch(updateOverview(overviewObj));
                dispatch(submitMessage("success"));
            }).catch((e) => dispatch(submitMessage("error")));
    }
}