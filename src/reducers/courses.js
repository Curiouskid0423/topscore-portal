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
        case "SET_COURSES":
            return action.courses;
        default:
            return prevState
    }
};

export default coursesReducer;