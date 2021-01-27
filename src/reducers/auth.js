/**
 * Auth reducer file.
 * @author Kevin Li
 */

const authReducer = (prevState = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                uid: action.uid,
                nameInitial: action.nameInitial
            }
        case "LOGOUT":
            return {};
        case "SET_USER_DB":
            return {
                ...prevState,
                userDB: action.usersList,
            };
        case "ADD_NEW_USER":
            return {
                ...prevState,
                userDB: [
                    ...prevState.userDB,
                    action.userObj
                ],
            };
        default:
            return prevState;
    }
}

export default authReducer;