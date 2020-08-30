const courseObject = ["Pretend", "that", "this", "is", "a", "Course", "Object"];

const studentInstance = {
    supervisor: "Kate",
    contact: {
        uuid: "jfiosdjoif23094u23",
        studentID: "2018MDHS18",
        firstName: "Kevin",
        lastName: "Gatsby",
        phone: "0912933348",
        email: "yutengli@berkeley.edu",
        highSchool: "Mingdao High School",  // Should be a option select (otherwise consultants can be prone to typos)
        graduationYear: 2019,
        attendedCollege: "University of California, Berkeley"
    },
    content: {
        advancedInfo: {
            packageType: {
                course: false,
                planning: true, 
                apply: true
            },
            personOfRecommendation: "Albert Wang",
        },
        partOverview: {
            atAGlance: {
                notice: "Notice will be a string.",
                familyInfo: "Kevin has no siblings."
            },
            firstAppointment: "Google Drive Link",
            preTestResult: "Google Drive Link" // Or `null`
        },
        partCore: {
            // List would be converted into a JSON object on Firebase, but within 
            // JavaScript, it would be a list.
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
            optionals: {
                // Whatever columns added.
            }
        },
        partReport: {
            SATreport: ["A list of Google Drive links"],
            TOEFLreport: ["A list of Google Drive links"]
        }
    }
}