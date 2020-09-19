/**
 * @desc This file contains all sort of filters, including
 * GetVisibleStudents, GetVisibleCourses, and more to be added.
 */

/**
 * @desc Filters Default.
 * `gradYear` is 0 by default, since it cannot be stored as undefined.
 */
const defaults = {
    visibleStudents: {
        name: "",
        gradYear: 0,
        course: "",
        pkg: ""
    },
    visibleCourses: {}
}

const filtersReducer = (prevState = defaults, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...prevState,
                visibleStudents: {
                    ...prevState.visibleStudents,
                    name: action.name
                }
            };
        case "SET_YEAR":
            return {
                ...prevState,
                visibleStudents: {
                    ...prevState.visibleStudents,
                    gradYear: action.year
                }
            };
        case "SET_COURSE":
            return {
                ...prevState,
                visibleStudents: {
                    ...prevState.visibleStudents,
                    course: action.course
                }
            };
        case "SET_PACKAGE":
            return {
                ...prevState,
                visibleStudents: {
                    ...prevState.visibleStudents,
                    pkg: action.pkg
                }
            };
        default:
            return prevState;
    }
}

export default filtersReducer;