/**
 * @desc Stores Course object redux reducer object.
 */

//course redux state should store a list of Course objects.
const coursesDefault = []

const coursesReducer = (prevState = coursesDefault, action) => {
    switch (action.type) {
        case "ADD_COURSE":
            return [
                ...prevState,
                action.course
            ];
        case "EDIT_COURSE":
            return prevState.map((el) => {
                if (el.uid === action.id) {
                    el = {
                        ...el,
                        ...action.course
                    }
                }
                return el;
            });
        case "REMOVE_COURSE":
            return prevState.filter((el) => el.uid !== action.id);
        case "SET_COURSES":
            return action.courses;
        default:
            return prevState
    }
};

export default coursesReducer;