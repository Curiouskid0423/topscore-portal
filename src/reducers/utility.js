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
        default:
            return prevState
    }
}

export default utilReducer;