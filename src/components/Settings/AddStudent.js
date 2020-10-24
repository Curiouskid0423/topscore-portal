import React from "react";
import Grid from "@material-ui/core/Grid";
import StudentForm from "../Students/StudentForm";
import { connect } from "react-redux";
import {startAddStudent} from "../../actions/students";
import {courseInstance0} from "../../fixtures";

const defaultContent = {
    content: {
        partOverview: {
            atAGlance: {
                notice: "Notes about students, family info, sibling info...etc.",
            },
        },
        partCore: {
            currentCourseList: [],
            pastCourseList: [courseInstance0]
        },
        partCompass: {
            summary: "(Default Message) Part 1: Summary Placeholder",
            improvement: "(Default Message) Part 2: Improve Placeholder",
            goalSetting: "(Default Message) Part 3: Goals Placeholder",
            engagement: "(Default Message) Part 4: Engagement Placeholder",
            gradesAndTests: "(Default Message) Part 5: Grades and Tests Placeholder",
            activities: "(Default Message) Part 6: Activities Placeholder",
            achievement: "(Default Message) Part 6.5: Achievements Placeholder",
            toDoList: "(Default Message) Part 7: To Do List Placeholder"
        },
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