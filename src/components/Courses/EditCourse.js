import React from "react";
import 'date-fns';
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import CourseForm from "./CourseForm";
import {startEditCourse} from "../../actions/courses";

const EditCourse = (props) => {
    const id = props.match.params.id
    // handleSubmit
    const handleEdit = (courseObj) => {
        props.dispatchEdit(courseObj, id);
        props.history.push("/courses");
    }

    return (
        <Grid item sm={12}>
            <CourseForm title={"Edit Course"} onSubmit={handleEdit}
                        isEdit={true} course={props.course}/>
        </Grid>
    );
};

const mapStateToProps = (state, ownProps) => ({
    course: state.courses.find((el) => el.uid === ownProps.match.params.id),
})

const mapDispatchToProps = (dispatch) => ({
    dispatchEdit: (courseObj, id) => dispatch(startEditCourse(courseObj, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);