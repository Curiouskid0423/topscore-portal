/**
 * @desc Selector function for visible course
 * Course search by default looks into "instructor name" and "course name".
 */

const getVisibleCourse = (query, courseList) => {
    return courseList.filter((el) => {
        const keyword = el.courseName + " " + el.instructor;
        return keyword.toLowerCase().includes(query.toLowerCase());
    });
}

export default getVisibleCourse;