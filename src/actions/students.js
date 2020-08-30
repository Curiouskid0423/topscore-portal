/**
 * @desc This file stores all the actions that a student db manipulation can have.
 */
import database from "../firebase/firebase"

/**
 * @desc startSetStudents is an asynchronous action that fetches
 * student `contact` info (not content) from the firebase.
 * `content` info would be fetched upon entering individual student's page.
 */
export const setStudents = (students) => ({
    type: "SET_STUDENTS",
    students
});

export const startSetStudents = () => {
    const studentlist = [];
    return (dispatch, getState) => {
        return database.ref("students_db")
            .once("value", (snapshot) => {
                snapshot.forEach((child) => {
                    studentlist.push({
                        id: child.key,
                        contact: child.val().contact
                    });
                });
                dispatch(setStudents(studentlist));
            }).catch((e) => {
                console.log("Failed to load in contact info. Here's why: ", e);
            });
    }
}