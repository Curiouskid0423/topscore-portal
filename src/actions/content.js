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

// Update Compass Section

export const updateSummary = (summary) => ({ type: "UPDATE_SUMMARY", summary });
export const updateImprove = (improve) => ({ type: "UPDATE_IMPROVE", improve });
export const updateActivities= (activities) => ({ type: "UPDATE_ACTIVITIES", activities });
export const updateEngage= (engage) => ({ type: "UPDATE_ENGAGE", engage });
export const updateAchieve = (achieve) => ({ type: "UPDATE_ACHIEVE", achieve });
export const updateToDo = (todo) => ({ type: "UPDATE_TODO", todo });
export const updateGoal = (goal) => ({ type: "UPDATE_GOAL", goal });
export const updateGradeTest = (grade) => ({ type: "UPDATE_TEST", grade });

export const startUpdateCompass = (compassObj, id, command) => {
    return (dispatch, getState) => {
        return database.ref(`students_db/${id}/content/partCompass/${command}`)
            .set(compassObj).then(() => {
                switch (command) {
                    case "summary":
                        dispatch(updateSummary(compassObj)); break;
                    case "improve":
                        dispatch(updateImprove(compassObj)); break;
                    case "activities":
                        dispatch(updateActivities(compassObj)); break;
                    case "achieve":
                        dispatch(updateAchieve(compassObj)); break;
                    case "toDoList":
                        dispatch(updateToDo(compassObj)); break;
                    case "goal":
                        dispatch(updateGoal(compassObj)); break;
                    case "gradesAndTests":
                        dispatch(updateGradeTest(compassObj)); break;
                    case "engagement":
                        dispatch(updateEngage(compassObj)); break;
                }
                dispatch(submitMessage("success"));
            }).catch((e) => dispatch(submitMessage("error")));
    }
}

export const updateMentor = (mentorObj) => ({
    type: "UPDATE_MENTOR",
    mentorObj
});

export const startUpdateMentor = (mentorObj, id) => {
    return (dispatch, getState) => {
        return database.ref(`students_db/${id}/content/partMentor`)
            .update(mentorObj).then(() => {
                dispatch(updateMentor(mentorObj));
                dispatch(submitMessage("success"));
            }).catch((e) => dispatch(submitMessage("error")));
    }
}

export const addCourseToStudent = (courseObj) => ({
    type: "ADD_COURSE_TO_STUDENT",
    courseObj
});

export const startAddCourseToStudent = (courseObj, studentID) => {
    return (dispatch, getState) => {
        return database.ref(`students_db/${studentID}/content/partCore/currentCourseList`)
            .push(courseObj).then((ref) => {
                dispatch(addCourseToStudent(courseObj));
                dispatch(submitMessage("success"));
            }).catch((e) => dispatch(submitMessage("error")));
    }
}