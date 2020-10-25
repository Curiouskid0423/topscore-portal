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

export const studentCourseDone = (courseObj) => ({
    type: "COURSE_DONE",
    courseObj
});

export const startCourseDone = (courseObj, studentID) => {
    return (dispatch, getState) => {
        // 1. Push the courseObj into pastCourseList
        return database.ref(`students_db/${studentID}/content/partCore/pastCourseList`)
            .push(courseObj).then(() => {
                // 2. Snapshot the value of current course list.
                return database.ref(`students_db/${studentID}/content/partCore/currentCourseList`)
                    .once("value").then((snapshot) => {
                        // 3. Find the "actual" stored courseID and then remove it.
                        const studentCourseList = Object.entries(snapshot.val());
                        const actualcourseObj = studentCourseList.find((el) => el[1].uid === courseObj.uid);
                        // console.log("Actual ID: " + actualcourseObj[0]); // actualcourseObj = [key, courseObj]
                        return database
                            .ref(`students_db/${studentID}/content/partCore/currentCourseList/${actualcourseObj[0]}`)
                            .set(null).then(() => {
                                dispatch(studentCourseDone(courseObj));
                                dispatch(submitMessage("success"));
                            });
                    });
            }).catch((e) => {
                dispatch(submitMessage("error"));
                console.log(e);
            })
    }
}