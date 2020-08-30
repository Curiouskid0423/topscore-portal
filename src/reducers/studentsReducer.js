/**
 * @desc a reducer for student database.
 */

const studentsReducer = (prevState = [], action) => {
    switch (action.type) {
        case "SET_STUDENTS":
            return action.students;
        default:
            return prevState;
    }
}

export default studentsReducer;