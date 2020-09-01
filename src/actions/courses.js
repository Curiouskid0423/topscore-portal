/**
 * @desc This file contains a list of course objects.
 */

import database from "../firebase/firebase";

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

export const startAddCourse = (courseObj) => {
    return (dispatch, getState) => {
        return database.ref("courses_db")
            .push(courseObj)
            .then((ref) => {
                dispatch(addCourse({
                    uid: ref.key,
                    ...courseObj
                }));
            }).catch((e) => console.log("Failed to submit the course object due to network issues."));
    }
}