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
        case "CHANGE_VIP":
            const targetStudent = prevState.find((el) => el.id === action.id);
            return [
                ...prevState, {
                    id: targetStudent.id,
                    supervisor: targetStudent.supervisor,
                    contact: {
                        ...targetStudent.contact,
                        specialId: {
                            ...targetStudent.contact.specialId,
                            isVIP: action.vipValue
                        }
                    }
                }
            ];
        case "CHANGE_BLACKLIST":
            const blackListStudent = prevState.find((el) => el.id === action.id);
            return [
                ...prevState, {
                    id: blackListStudent.id,
                    supervisor: blackListStudent.supervisor,
                    contact: {
                        ...blackListStudent.contact,
                        specialId: {
                            ...blackListStudent.contact.specialId,
                            isBlackList: action.blackListValue
                        }
                    }
                }
            ];
        default:
            return prevState;
    }
}

export default studentsReducer;