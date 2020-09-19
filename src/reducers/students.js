/**
 * @desc a reducer for student database.
 */

const studentsReducer = (prevState = [], action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return [
                ...prevState,
                action.student
            ];
        case "EDIT_STUDENT":
            return prevState.map((el) => {
                if (el.id === action.id) {
                    el = {
                        ...el,
                        ...action.student
                    }
                }
                return el;
            });
        case "REMOVE_STUDENT":
            return prevState.filter((el) => el.id !== action.id);
        case "SET_STUDENTS":
            return action.students;
        default:
            return prevState;
    }
}

export default studentsReducer;