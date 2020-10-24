/**
 * @desc This file stores all the actions that a student db manipulation can have.
 */
import database from "../firebase/firebase";
import {submitMessage} from "./utility";

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
                        supervisor: child.val().supervisor,
                        contact: child.val().contact
                    });
                });
                dispatch(setStudents(studentlist));
            }).catch((e) => {
                console.log("Failed to load in contact info. Here's why: ", e);
            });
    }
}

export const addStudent = (student) => ({
    type: "ADD_STUDENT",
    student
});

export const startAddStudent = (studentObj) => {
    return (dispatch, getState) => {
        return database.ref("students_db")
            .push(studentObj).then((ref) => {
            dispatch(addStudent({
                id: ref.key,
                ...studentObj
            }));
            dispatch(submitMessage("success"));
        }).catch((e) => {
            dispatch(submitMessage("error"));
        });
    }
}

export const editStudent = (student, id) => ({
    type: "EDIT_STUDENT",
    id,
    student
});

export const startEditStudent = (studentObj = {}, id) => {
    return (dispatch, getState) => {
        return database.ref(`students_db/${id}/`)
            .update(studentObj)
            .then(() => {
                dispatch(editStudent(studentObj, id));
                dispatch(submitMessage("success"));
            }).catch((e) =>{
                dispatch(submitMessage("error"));
                console.log("Error", e);
            });
    }
}

export const removeStudent = (id) => ({
    type: "REMOVE_STUDENT",
    id
});

export const startRemoveStudent = (id) => {
    return (dispatch, getState) => {
        return database.ref(`students_db/${id}`)
            .set(null).then(() => {
                dispatch(removeStudent(id));
                dispatch(submitMessage("success"));
            }).catch((e) => {
                dispatch(submitMessage("error"));
            });
    }
}

export const changeVIP = (id, vipValue) => ({
    type: "CHANGE_VIP",
    id, vipValue
});

export const startChangeVIP = (id, vipValue) => {
    return (dispatch) => {
        return database.ref(`students_db/${id}/contact/specialId`)
            .update({ isVIP: vipValue }).then(() => {
                dispatch(changeVIP(id, vipValue));
            }).catch((e) => {
                dispatch(submitMessage("error"));
            });
    }
}

export const changeBlackList = (id, blackListValue) => ({
    type: "CHANGE_BLACKLIST",
    id, blackListValue
});

export const startChangeBlackList = (id, blackListValue) => {
    return (dispatch) => {
        return database.ref(`students_db/${id}/contact/specialId/`)
            .update({isBlackList: blackListValue}).then(() => {
                dispatch(changeBlackList(id, blackListValue));
            }).catch((e) => {
                dispatch(submitMessage("error"));
            });
    }
}
