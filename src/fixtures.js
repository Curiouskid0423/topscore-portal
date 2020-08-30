/**
 * @desc A file that contains dummy data for the sake of testing.
 */

// Custom lorem ipsum text
export const paragraphFiller = "While MongoDB emerged as part of the wave of so-called “NoSQL” databases, MongoDB and Firebase are both "
    + "more similar to their relational forebearers than most of the more single-purpose NoSQL solutions. "
    + "MongoDB, for instance, supports ACID transactions, schema validation, and even cross-collection joins, and "
    + "is intended to handle similar workloads to those that were traditionally the domain of relational databases "
    + "like Oracle or MySQL, while bringing the scale-first architecture and structural flexibility that typifies "
    + "NoSQL solutions. MongoDB, for instance, supports ACID transactions, schema validation, and even "
    + "cross-collection joins, and is intended to handle similar workloads to those that were traditionally "
    + "the domain of relational databases like Oracle or MySQL, while bringing the scale-first architecture and structural "
    + "flexibility that typifies NoSQL solutions. MongoDB, for instance, supports ACID transactions, schema validation, and "
    + "even cross-collection joins, and is intended to handle similar workloads to those that were traditionally the domain of "
    + "relational databases like Oracle or MySQL, while bringing the scale-first architecture and structural flexibility "
    + "that typifies NoSQL solutions.";

export const courseObject = [
    { name: "SAT Internsive Camp", instructor: "Johnny"},
    { name: "ML Camp", instructor: "Kevin"},
    { name: "Web dev workshop", instructor: "Kevin"},
    { name: "Calligraphy program", instructor: "Ricky"},
    { name: "Barista internship", instructor: "Johnny"},
    { name: "AP Calculus", instructor: "Ken"}];

/**
 * @desc A student instance for testing purpose.
 */

export const studentInstance1 = {
    supervisor: "Kate",
    contact: {
        studentID: "2018MDHS18",
        firstName: "Kevin",
        lastName: "Gatsby",
        phone: "0912933348",
        email: "yutengli@berkeley.edu",
        highSchool: "Mingdao High School",
        graduationYear: 2019,
        attendedCollege: "University of California, Berkeley",
        packageType: {
            course: false,
            planning: true,
            apply: true
        },
        personOfRecommendation: "Albert Wang",
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
                familyInfo: "Kevin has no siblings."
            },
            firstAppointment: "Google Drive Link",
            preTestResult: "Google Drive Link"
        },
        partCore: {
            currentCourseList: [
                courseObject[0], courseObject[1], courseObject[2]
            ],
            pastCourseList: [
                courseObject[3], courseObject[4], courseObject[5]
            ]
        },
        partCompass: {
            summary: "will be a string",
            improvemnt: "will be a string",
            goalSetting: "will be a string",
            engagement: "will be a string",
            gradesAndTests: "will be a string",
            activities: "will be a string",
            toDoList: "will be a string"
        },
        partMentor: {
            testInfo: "Google Drive Link",
            collegeList: "Google Drive Link",
            optionals: null
        },
        partReport: {
            SATreport: ["A list of Google Drive links"],
            TOEFLreport: ["A list of Google Drive links"]
        }
    }
}


export const studentInstance2 = {
    supervisor: "Angel",
    contact: {
        studentID: "2017MORI27",
        firstName: "Ricky",
        lastName: "Fitzgerald",
        phone: "0927498291",
        email: "ricky@mca.edu",
        highSchool: "Morrison Academy",
        graduationYear: 2017,
        attendedCollege: "Stanford University",
        packageType: {
            course: true,
            planning: false,
            apply: true
        },
        personOfRecommendation: null,
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
                familyInfo: "Ricky has a sister currently at tenth grade."
            },
            firstAppointment: "Google Drive Link",
            preTestResult: "Google Drive Link"
        },
        partCore: {
            currentCourseList: [
                courseObject[4],
            ],
            pastCourseList: [
                courseObject[1], courseObject[3], courseObject[5]
            ]
        },
        partCompass: {
            summary: "will be a string",
            improvemnt: "will be a string",
            goalSetting: "will be a string",
            engagement: "will be a string",
            gradesAndTests: "will be a string",
            activities: "will be a string",
            toDoList: "will be a string"
        },
        partMentor: {
            testInfo: "Google Drive Link",
            collegeList: "Google Drive Link",
            optionals: null
        },
        partReport: {
            SATreport: ["A list of Google Drive links"],
            TOEFLreport: ["A list of Google Drive links"]
        }
    }
}
