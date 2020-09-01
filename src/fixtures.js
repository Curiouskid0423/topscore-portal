import moment from "moment";
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

// FIXME: Password should be stored in hash.
export const userInstance1 = {
    userType: "ADMIN",
    userName: "Kate",
    email: "kate@topscore-edu.com",
    password: "123abc"
}


// CourseInstance should have a moment() startDate
export const courseInstance1 = {
    type: "GROUP",
    courseName: "SAT Beginner Class",
    instructor: "Johnny Hope",
    startDate: moment().valueOf(),
    repeatBy: "WEEK",
    repeatTimes: 12
}
export const courseInstance2 = {
    type: "1_ON_1",
    courseName: "ACT Advanced Class",
    instructor: "Johnny Hope",
    startDate: moment().valueOf(),
    repeatBy: "MONTH",
    repeatTimes: 10
}
export const courseInstance3 = {
    type: "1_ON_1",
    courseName: "ACT Advanced Technique",
    instructor: "Johnny Hope",
    startDate: moment().valueOf(),
    repeatBy: "WEEK",
    repeatTimes: 4
}
export const courseInstance4 = {
    type: "GROUP",
    courseName: "ACT Beginner Class",
    instructor: "Johnny Hope",
    startDate: moment().valueOf(),
    repeatBy: "WEEK",
    repeatTimes: 10
}
export const courseInstance5 = {
    type: "GROUP",
    courseName: "Web Dev Workshop",
    instructor: "Kevin Li",
    startDate: moment().valueOf(),
    repeatBy: null,
    repeatTimes: 0
}
export const courseInstance6 = {
    type: "GROUP",
    courseName: "Machine Learning Camp",
    instructor: "Kevin Li",
    startDate: moment().valueOf(),
    repeatBy: "WEEK",
    repeatTimes: 5
}

export const courseInstance7 = {
    type: "GROUP",
    courseName: "Calligraphy Workshop",
    instructor: "Ricky Huang",
    startDate: moment().valueOf(),
    repeatBy: "WEEK",
    repeatTimes: 8
}

export const courseInstance8 = {
    type: "GROUP",
    courseName: "Barista Internship",
    instructor: "Lousia Coffee Inc.",
    startDate: moment().valueOf(),
    repeatBy: "DAY",
    repeatTimes: 2
}



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
        family: {
            parent: "Parent Name",
            relationship: "Mother",
            phone: "0911283744",
            email: "parents0123@gmail.com"
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
            improvement: "will be a string",
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
        family: {
            parent: "Parent Name",
            relationship: "Mother",
            phone: "0911283744",
            email: "parents0123@gmail.com"
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
            improvement: "will be a string",
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

export const studentInstance3 = {
    supervisor: "Kate",
    contact: {
        studentID: "2017MDHS05",
        firstName: "Benjamin",
        lastName: "Chou",
        phone: "0987654273",
        email: "benjaminchou@berkeley.edu",
        highSchool: "Mingdao High School",
        graduationYear: 2017,
        attendedCollege: "Harvard University",
        packageType: {
            course: true,
            planning: true,
            apply: true
        },
        family: {
            parent: "Parent Name",
            relationship: "Mother",
            phone: "0911283744",
            email: "parents0123@gmail.com"
        },
        personOfRecommendation: null,
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
                familyInfo: "Benjamin has a brother currently in 9th grade."
            },
            firstAppointment: "Google Drive Link",
            preTestResult: "Google Drive Link"
        },
        partCore: {
            currentCourseList: [
                courseObject[2],
            ],
            pastCourseList: [
                courseObject[1], courseObject[3]
            ]
        },
        partCompass: {
            summary: "will be a string",
            improvement: "will be a string",
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

export const studentInstance4 = {
    supervisor: "Angel",
    contact: {
        studentID: "2019AST02",
        firstName: "Lavinia",
        lastName: "Lin",
        phone: "0982734553",
        email: "lavinia@bu.edu",
        highSchool: "American School in Taichung",
        graduationYear: 2019,
        attendedCollege: "Boston University",
        packageType: {
            course: true,
            planning: false,
            apply: true
        },
        family: {
            parent: "Parent Name",
            relationship: "Mother",
            phone: "0911283744",
            email: "parents0123@gmail.com"
        },
        personOfRecommendation: null,
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
                familyInfo: "Lavinia has two sisters."
            },
            firstAppointment: "Google Drive Link",
            preTestResult: "Google Drive Link"
        },
        partCore: {
            currentCourseList: null,
            pastCourseList: [
                courseObject[1], courseObject[3]
            ]
        },
        partCompass: {
            summary: "will be a string",
            improvement: "will be a string",
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

export const studentInstance5 = {
    supervisor: "Kate",
    contact: {
        studentID: "2020MORI11",
        firstName: "Darren",
        lastName: "Shiu",
        phone: "0916472765",
        email: "darren@mca.edu",
        highSchool: "Morrison Academy",
        graduationYear: 2020,
        attendedCollege: null,
        packageType: {
            course: true,
            planning: true,
            apply: true
        },
        family: {
            parent: "Parent Name",
            relationship: "Mother",
            phone: "0911283744",
            email: "parents0123@gmail.com"
        },
        personOfRecommendation: null,
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
                familyInfo: "Darren is the only child in his family."
            },
            firstAppointment: "Google Drive Link",
            preTestResult: "Google Drive Link"
        },
        partCore: {
            currentCourseList: null,
            pastCourseList: [
                courseObject[3], courseObject[4]
            ]
        },
        partCompass: {
            summary: "will be a string",
            improvement: "will be a string",
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

export const studentInstance6 = {
    supervisor: "Kate",
    contact: {
        studentID: "2019MDHS23",
        firstName: "Timothy",
        lastName: "Tsui",
        phone: "0912456827",
        email: "tim.tsui@hkust.edu",
        highSchool: "Mingdao High School",
        graduationYear: 2019,
        attendedCollege: "TsingHua University",
        packageType: {
            course: false,
            planning: false,
            apply: true
        },
        family: {
            parent: "Parent Name",
            relationship: "Mother",
            phone: "0911283744",
            email: "parents0123@gmail.com"
        },
        personOfRecommendation: "Kevin Li (Yu-Teng)",
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
                familyInfo: "Timothy is the only child in his family."
            },
            firstAppointment: "Google Drive Link",
            preTestResult: "Google Drive Link"
        },
        partCore: {
            currentCourseList: null,
            pastCourseList: [
                courseObject[3], courseObject[4]
            ]
        },
        partCompass: {
            summary: "will be a string",
            improvement: "will be a string",
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

