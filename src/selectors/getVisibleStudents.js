/**
 * @desc Selector File for visible student
 */


/**
 * Sorting Students.
 */
const sortStudents = (studentList) => {
    const nameSorted = studentList.sort((a, b) => (a.contact.firstName >= b.contact.firstName ? 1 : -1));
    const gradSorted = nameSorted.sort((first, second) => {
        const firstHasCollege = first.contact.attendedCollege !== "";
        const secondHasCollege = second.contact.attendedCollege !== "";
        if (firstHasCollege && !secondHasCollege) {
            return 1;
        } else if (!firstHasCollege && secondHasCollege) {
            return -1;
        }
        return 0;
    });
    return gradSorted;
}

/**
 * Search with the given parameter. Sort as the following (no user option allowed),
 * 1) Current HS > HS graduate. 2) Name Alphabetical Order.
 * The default
 * @param students: student object
 * @param filter: filters.visibleStudents (course filter isn't passed in)
 * @return visible student list
 */
const getVisibleStudents = (students, filter) => {
    const { name, gradYear, course, pkg } = filter;
    const unsorted = students.filter((el) => {
        const itemFullName = el.contact.firstName + " " + el.contact.lastName;
        const nameMatch = itemFullName.toLowerCase().includes(name.toLowerCase());
        const yearMatch = (gradYear === 0) ? true : el.contact.graduationYear === gradYear;
        const courseMatch = true;     // TODO: Temporary placeholder. Currently, "contact" does not include courseList.
        let packageMatch = true;
        switch (pkg) {
            case "Course":
                packageMatch = el.contact.packageType.course;
                break;
            case "Planning":
                packageMatch = el.contact.packageType.planning;
                break;
            case "Application":
                packageMatch = el.contact.packageType.apply;
                break;
        }
        return nameMatch && yearMatch && courseMatch && packageMatch;
    })
    return sortStudents(unsorted);
}

export default getVisibleStudents;