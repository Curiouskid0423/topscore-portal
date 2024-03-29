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
    repeatBy: "weeks",
    repeatTimes: 12
}
export const courseInstance2 = {
    type: "1_ON_1",
    courseName: "ACT Advanced Class",
    instructor: "Johnny Hope",
    startDate: moment().valueOf(),
    repeatBy: "months",
    repeatTimes: 10
}
export const courseInstance3 = {
    type: "1_ON_1",
    courseName: "ACT Advanced Technique",
    instructor: "Johnny Hope",
    startDate: moment().valueOf(),
    repeatBy: "weeks",
    repeatTimes: 4
}
export const courseInstance4 = {
    type: "GROUP",
    courseName: "ACT Beginner Class",
    instructor: "Johnny Hope",
    startDate: moment().valueOf(),
    repeatBy: "weeks",
    repeatTimes: 10
}
export const courseInstance5 = {
    type: "GROUP",
    courseName: "Web Dev Workshop",
    instructor: "Kevin Li",
    startDate: moment().valueOf(),
    repeatBy: "",
    repeatTimes: 0
}
export const courseInstance6 = {
    type: "GROUP",
    courseName: "Machine Learning Camp",
    instructor: "Kevin Li",
    startDate: moment().valueOf(),
    repeatBy: "weeks",
    repeatTimes: 5
}
export const courseInstance7 = {
    type: "GROUP",
    courseName: "Calligraphy Workshop",
    instructor: "Ricky Huang",
    startDate: moment().valueOf(),
    repeatBy: "weeks",
    repeatTimes: 8
}
export const courseInstance8 = {
    type: "GROUP",
    courseName: "Barista Internship",
    instructor: "Lousia Coffee Inc.",
    startDate: moment().valueOf(),
    repeatBy: "days",
    repeatTimes: 2
}

export const courseInstance0 = {
    type: "INIT",
    courseName: "INIT_COURSE",
    instructor: "Developer",
    startDate: moment(0).valueOf(),
    repeatBy: "days",
    repeatTimes: 1
}

export const courseInstance = [
    courseInstance1, courseInstance2,
    courseInstance3, courseInstance4,
    courseInstance5, courseInstance6,
    courseInstance7, courseInstance8,
]


export const reportCardInstance0 = {
    id: "000",
    type: "SAT",
    title: "PLACEHOLDER",
    testDate: moment().valueOf(),
    sourceLink: "https://www.ets.org/toefl",
}


/**
 * @desc A student instance for testing purpose.
 */

export const studentInstance1 = {
    supervisor: "Kate",
    contact: {
        studentID: "2018MDHS18",
        firstName: "Kevin",
        lastName: "Li",
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
            phone: "0931480950",
            email: "evny2305@gmail.com"
        },
        personOfRecommendation: "Albert Wang",
        recordOfFirstAppt: "https://curiouskid0423.github.io/",
        specialId: {
            isVIP: true,
            isBlackList: false
        },
        preTestResult: {
            date: moment().valueOf(),
            reading: 300,
            writing: 370,
            math: 790,
            essay: "7-7-7"
        }
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
            },
        },
        partCore: {
            currentCourseList: [],
            pastCourseList: [courseInstance0]
        },
        partCompass: {
                summary: "Compass, Spring 20, Part 1: Summary",
                improvement: "Compass, Spring 20, Part 2: Improve",
                goalSetting: "Compass, Spring 20, Part 3: Goals",
                engagement: "Compass, Spring 20, Part 4: Engagement",
                gradesAndTests: "Compass, Spring 20, Part 5: Grades and Tests",
                activities: "Compass, Spring 20, Part 6: Activities",
                achievement: "Compass, Spring 20, Part 6.5: Achievements",
                toDoList: "Compass, Spring 20, Part 7: To Do List"
        },
        partMentor: {
            testInfo: "Google Drive Link",
            collegeList: "Google Drive Link",
            optionals: ""
        },
        partReport: {
            SATreport: [],
            TOEFLreport: [reportCardInstance0]
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
        personOfRecommendation: "",
        recordOfFirstAppt: "https://curiouskid0423.github.io/",
        specialId: {
            isVIP: false,
            isBlackList: false
        },
        preTestResult: {
            date: moment().valueOf(),
            reading: 280,
            writing: 400,
            math: 800,
            essay: "7-7-7"
        }
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
            },
        },
        partCore: {
            currentCourseList: [],
            pastCourseList: [courseInstance0]
        },
        partCompass: {
                summary: "Compass, Spring 20, Part 1: Summary",
                improvement: "Compass, Spring 20, Part 2: Improve",
                goalSetting: "Compass, Spring 20, Part 3: Goals",
                engagement: "Compass, Spring 20, Part 4: Engagement",
                gradesAndTests: "Compass, Spring 20, Part 5: Grades and Tests",
                activities: "Compass, Spring 20, Part 6: Activities",
                achievement: "Compass, Spring 20, Part 6.5: Achievements",
                toDoList: "Compass, Spring 20, Part 7: To Do List"
        },
        partMentor: {
            testInfo: "Google Drive Link",
            collegeList: "Google Drive Link",
            optionals: ""
        },
        partReport: {
            SATreport: [],
            TOEFLreport: [reportCardInstance0]
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
        personOfRecommendation: "",
        recordOfFirstAppt: "https://curiouskid0423.github.io/",
        specialId: {
            isVIP: false,
            isBlackList: false
        },
        preTestResult: {
            date: moment().valueOf(),
            reading: 300,
            writing: 280,
            math: 780,
            essay: "5-6-7"
        }
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
            },
        },
        partCore: {
            currentCourseList: [],
            pastCourseList: [courseInstance0]
        },
        partCompass: {
                summary: "Compass, Spring 20, Part 1: Summary",
                improvement: "Compass, Spring 20, Part 2: Improve",
                goalSetting: "Compass, Spring 20, Part 3: Goals",
                engagement: "Compass, Spring 20, Part 4: Engagement",
                gradesAndTests: "Compass, Spring 20, Part 5: Grades and Tests",
                activities: "Compass, Spring 20, Part 6: Activities",
                achievement: "Compass, Spring 20, Part 6.5: Achievements",
                toDoList: "Compass, Spring 20, Part 7: To Do List"
        },
        partMentor: {
            testInfo: "Google Drive Link",
            collegeList: "Google Drive Link",
            optionals: ""
        },
        partReport: {
            SATreport: [],
            TOEFLreport: [reportCardInstance0]
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
            parent: "Jasmin Huang",
            relationship: "Mother",
            phone: "0911283744",
            email: "lavMom@gmail.com"
        },
        personOfRecommendation: "",
        recordOfFirstAppt: "https://curiouskid0423.github.io/",specialId: {
            isVIP: false,
            isBlackList: true
        },
        preTestResult: {
            date: moment().valueOf(),
            reading: 320,
            writing: 340,
            math: 800,
            essay: "5-7-7"
        }
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
            },
        },
        partCore: {
            currentCourseList: [],
            pastCourseList: [
                courseInstance[1], courseInstance[3]
            ]
        },
        partCompass: {
            summary: "Compass, Spring 20, Part 1: Summary",
            improvement: "Compass, Spring 20, Part 2: Improve",
            goalSetting: "Compass, Spring 20, Part 3: Goals",
            engagement: "Compass, Spring 20, Part 4: Engagement",
            gradesAndTests: "Compass, Spring 20, Part 5: Grades and Tests",
            activities: "Compass, Spring 20, Part 6: Activities",
            achievement: "Compass, Spring 20, Part 6.5: Achievements",
            toDoList: "Compass, Spring 20, Part 7: To Do List"
        },
        partMentor: {
            testInfo: "Google Drive Link",
            collegeList: "Google Drive Link",
            optionals: ""
        },
        partReport: {
            SATreport: [],
            TOEFLreport: [reportCardInstance0]
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
        attendedCollege: "",
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
        personOfRecommendation: "",
        recordOfFirstAppt: "https://curiouskid0423.github.io/",
        specialId: {
            isVIP: false,
            isBlackList: false
        },
        preTestResult: {
            date: moment().valueOf(),
            reading: 300,
            writing: 370,
            math: 790,
            essay: "7-7-7"
        }
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
            },
        },
        partCore: {
            currentCourseList: [],
            pastCourseList: [
                courseInstance[3], courseInstance[4]
            ]
        },
        partCompass: {
            summary: "Compass, Spring 20, Part 1: Summary",
            improvement: "Compass, Spring 20, Part 2: Improve",
            goalSetting: "Compass, Spring 20, Part 3: Goals",
            engagement: "Compass, Spring 20, Part 4: Engagement",
            gradesAndTests: "Compass, Spring 20, Part 5: Grades and Tests",
            activities: "Compass, Spring 20, Part 6: Activities",
            achievement: "Compass, Spring 20, Part 6.5: Achievements",
            toDoList: "Compass, Spring 20, Part 7: To Do List"
        },
        partMentor: {
            testInfo: "Google Drive Link",
            collegeList: "Google Drive Link",
            optionals: ""
        },
        partReport: {
            SATreport: [],
            TOEFLreport: [reportCardInstance0]
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
            parent: "Molly Huang",
            relationship: "Mother",
            phone: "0911283744",
            email: "timothymom@gmail.com"
        },
        personOfRecommendation: "Kevin Li (Yu-Teng)",
        recordOfFirstAppt: "https://curiouskid0423.github.io/",
        specialId: {
            isVIP: true,
            isBlackList: false
        },
        preTestResult: {
            date: moment().valueOf(),
            reading: 300,
            writing: 370,
            math: 790,
            essay: "7-7-7"
        }
    },
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
            },
        },
        partCore: {
            currentCourseList: [],
            pastCourseList: [
                courseInstance[3], courseInstance[4]
            ]
        },
        partCompass: {
            summary: "Compass, Spring 20, Part 1: Summary",
            improvement: "Compass, Spring 20, Part 2: Improve",
            goalSetting: "Compass, Spring 20, Part 3: Goals",
            engagement: "Compass, Spring 20, Part 4: Engagement",
            gradesAndTests: "Compass, Spring 20, Part 5: Grades and Tests",
            activities: "Compass, Spring 20, Part 6: Activities",
            achievement: "Compass, Spring 20, Part 6.5: Achievements",
            toDoList: "Compass, Spring 20, Part 7: To Do List"
        },
        partMentor: {
            testInfo: "Google Drive Link",
            collegeList: "Google Drive Link",
            optionals: ""
        },
        partReport: {
            SATreport: [],
            TOEFLreport: [reportCardInstance0]
        }
    }
}

