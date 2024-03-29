/**
 * @desc This file contains a list of course objects.
 */

import database from "../firebase/firebase";
import {submitMessage} from "./utility";

/**
 * Synchronous action call.
 * @param `courses` form the firebase
 * @return a setCourses Action to Redux store.
 */
export const setCourses = (courses) => {
    return {
        type: "SET_COURSES",
        courses
    }
}

/**
 * @desc Async action to set course list by fetching from firebase
 */
export const startSetCourses = () => {
    let courseList = [];
    return (dispatch, getStates) => {
        return database.ref("courses_db")
            .once("value", (snapshot) => {
            snapshot.forEach((child) => {
                courseList.push({
                    uid: child.key, ...child.val()
                });
            });
            dispatch(setCourses(courseList));
        }).catch((e) => {
            console.log("Failed to fetch course list. Here's why:", e);
        });
    }
}

/**
 * AddCourse Object.
 * @param course
 * @return an Add Course Action Object.
 */
export const addCourse = (course) => {
    return {
        type: "ADD_COURSE",
        course
    }
}
/**
 * @desc Async action to add new course (universally on the system).
 */
export const startAddCourse = (courseObj) => {
    return (dispatch, getState) => {
        return database.ref("courses_db")
            .push(courseObj)
            .then((ref) => {
                dispatch(addCourse({
                    uid: ref.key,
                    ...courseObj
                }));
                dispatch(submitMessage("success"));
            }).catch((e) => {
                dispatch(submitMessage("error"));
            });
    }
}
/**
 * EditCourse Object.
 * @param courseObj, id
 * @return an Edit Course Action Object.
 */
export const editCourse = (courseObj, id) => {
    return {
        type: "EDIT_COURSE",
        id,
        course: courseObj
    };
}
/**
 * @desc Async action to edit course.
 */
export const startEditCourse = (courseObj, id) => {
    return (dispatch, getState) => {
        return database.ref(`courses_db/${id}/`)
            .update(courseObj).then(() => {
                dispatch(editCourse(courseObj, id));
                dispatch(submitMessage("success"));
            }).catch((e) => dispatch(submitMessage("error")));
    };
}

export const removeCourse = (id) => {
    return {
        type: "REMOVE_COURSE",
        id
    }
}

export const startRemoveCourse = (id) => {
    return (dispatch, getState) => {
        return database.ref(`courses_db/${id}`)
            .set(null).then(() => {
                dispatch(removeCourse(id));
                dispatch(submitMessage("success"));
            }).catch((e) => dispatch(submitMessage("error")));
    };
}
