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
                ...prevState,
                templateDrawerOpen: !prevState.templateDrawerOpen
            };
        case "SUBMIT_MSG":
            return {
                ...prevState,
                submitStatus: action.submitStatus
            };
        case "LOGIN_USER_INFO":
            return {
                ...prevState,
                loginName: action.name,
                loginEmail: action.email,
                loginType: action.userType,
            };
        default:
            return prevState;
    }
}

export default utilReducer;