import React from "react";
import Grid from "@material-ui/core/Grid";
import StudentForm from "../Students/StudentForm";
import { connect } from "react-redux";
import {startAddStudent} from "../../actions/students";
import {courseInstance} from "../../fixtures";

const defaultContent = {
    content: {
        partOverview: {
            atAGlance: {
                notice: "Type any notice here.",
                familyInfo: ""
            },
        },
        partCore: {
            currentCourseList: [],
            pastCourseList: [
                courseInstance[3], courseInstance[4]
            ]
        },
        partCompass: [{
            summary: "(Default Message) Part 1: Summary",
            improvement: "(Default Message) Part 2: Improve",
            goalSetting: "(Default Message) Part 3: Goals",
            engagement: "(Default Message) Part 4: Engagement",
            gradesAndTests: "(Default Message) Part 5: Grades and Tests",
            activities: "(Default Message) Part 6: Activities",
            achievement: "(Default Message) Part 6.5: Achievements",
            toDoList: "(Default Message) Part 7: To Do List"
        }],
        partMentor: {
            testInfo: "",
            collegeList: "",
            optionals: ""
        },
        partReport: {
            SATreport: [],
            TOEFLreport: []
        }
    }
}

const AddStudent = (props) => {

    const handleSubmit = (studentObj) => {
        const embedContent = {
            ...studentObj,
            ...defaultContent
        }
        props.dispatchAddStudent(embedContent);
        props.history.push("/students");
    }

    return (
        <Grid item sm={12}>
            <StudentForm onSubmit={handleSubmit}/>
        </Grid>
    )
};

const mapDispatchToProps = (dispatch) => ({
    dispatchAddStudent: (student) => dispatch(startAddStudent(student))
})

export default connect(undefined, mapDispatchToProps)(AddStudent);