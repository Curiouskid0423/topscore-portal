/**
 * @desc Reducer for utility variables.
 */

const utilDefaults = {
    templateDrawerOpen: false
}

const utilReducer = (prevState = utilDefaults, action) => {
    switch (action.type) {
        case "TMP_DRAWER_CHANGE":
            return {
                templateDrawerOpen: !prevState.templateDrawerOpen
            };
        case "SUBMIT_MSG":
            return {
                submitStatus: action.submitStatus
            };
        default:
            return prevState;
    }
}

export default utilReducer;