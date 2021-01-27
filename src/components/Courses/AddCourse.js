import React from "react";
import 'date-fns';
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import CourseForm from "./CourseForm";
import {startAddCourse} from "../../actions/courses";

const AddCourse = (props) => {
    // handleSubmit
    const handleSubmit = (courseObj) => {
        props.dispatchAddCourse(courseObj);
        props.history.push("/courses");
    }

    return (
        <Grid item sm={12}>
            <CourseForm title={"Add New Course"} onSubmit={handleSubmit}/>
        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchAddCourse: (courseObj) => dispatch(startAddCourse(courseObj))
});

export default connect(undefined, mapDispatchToProps)(AddCourse);