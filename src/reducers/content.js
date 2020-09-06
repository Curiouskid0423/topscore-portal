/**
 * @desc Store content reducer for an individual student.
 */

const contentReducer = (prevState = {}, action) => {
    switch (action.type) {
        case "SET_CONTENT":
            return (action.content === null) ? {} : action.content;
        default:
            return prevState;
    }
}

export default contentReducer;