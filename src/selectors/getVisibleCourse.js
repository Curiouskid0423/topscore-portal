/**
 * @desc Selector function for visible course
 */

const getVisibleCourse = (query, courseList) => {
    return courseList.filter((el) => {
        return el.courseName.toLowerCase().includes(query.toLowerCase());
    });
}

export default getVisibleCourse;