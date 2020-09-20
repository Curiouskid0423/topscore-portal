/**
 * @desc Store content reducer for an individual student.
 */

const contentReducer = (prevState = {}, action) => {
    switch (action.type) {
        case "SET_CONTENT":
            return (action.content === null) ? {} : action.content;
        case "UPDATE_OVERVIEW":
            return {
                ...prevState,
                partOverview: {
                    atAGlance: {
                        ...action.overview
                    }
                }
            };
        case "UPDATE_SUMMARY":
            return {
                ...prevState,
                partCompass: {
                    ...prevState.partCompass, summary: action.summary,
                }
            };
        case "UPDATE_IMPROVE":
            return {
                ...prevState,
                partCompass: {
                    ...prevState.partCompass, improvement: action.improve,
                }
            };
        case "UPDATE_GOAL":
            return {
                ...prevState,
                partCompass: {
                    ...prevState.partCompass, goalSetting: action.goal,
                }
            };
        case "UPDATE_ACTIVITIES":
            return {
                ...prevState,
                partCompass: {
                    ...prevState.partCompass, activities: action.activities,
                }
            };
        case "UPDATE_ACHIEVE":
            return {
                ...prevState,
                partCompass: {
                    ...prevState.partCompass, achievement: action.achieve,
                }
            };
        case "UPDATE_TEST":
            return {
                ...prevState,
                partCompass: {
                    ...prevState.partCompass, gradesAndTests: action.grade,
                }
            };
        case "UPDATE_ENGAGE":
            return {
                ...prevState,
                partCompass: {
                    ...prevState.partCompass, engagement: action.engage,
                }
            };
        case "UPDATE_TODO":
            return {
                ...prevState,
                partCompass: {
                    ...prevState.partCompass, toDoList: action.todo,
                }
            };
        case "UPDATE_MENTOR":
            return {
                ...prevState,
                partMentor: {
                    ...prevState.partMentor, ...action.mentorObj,
                }
            }
        default:
            return prevState;
    }
}

export default contentReducer;