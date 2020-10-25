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
            };
        case "ADD_COURSE_TO_STUDENT":
            const courseID = action.courseObj.uid;
            return {
                ...prevState,
                partCore: {
                    ...prevState.partCore,
                    currentCourseList: {
                        ...prevState.partCore.currentCourseList,
                        [courseID]: action.courseObj,
                    },
                }
            };
        case "COURSE_DONE":
            const completedCourseID = action.courseObj.uid;
            return {
                ...prevState,
                partCore: {
                    currentCourseList: Object.values(prevState.partCore.currentCourseList)
                        .filter((el) => el.uid !== completedCourseID),
                    pastCourseList: {
                        ...prevState.partCore.pastCourseList,
                        [completedCourseID]: action.courseObj
                    }
                }
            }
        default:
            return prevState;
    }
}

export default contentReducer;