/**
 * @desc a reducer for student database.
 */

const studentsReducer = (prevState = [], action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return [
                ...prevState,
                action.student
            ]
        case "SET_STUDENTS":
            return action.students;
        default:
            return prevState;
    }
}

export default studentsReducer;