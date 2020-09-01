import React from "react";
import 'date-fns';
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import CourseForm from "./CourseForm";
import {startAddCourse} from "../../actions/courses";

export class AddCourse extends React.Component {
    constructor(props) {
        super(props);
    }

    // handleSubmit
    handleSubmit = (courseObj) => {
        this.props.dispatchAddCourse(courseObj);
        this.props.history.push("/courses");
    }
    
    render() {
        return (
            <Grid item sm={12}>
                <CourseForm title={"Add New Course"} onSubmit={this.handleSubmit}/>
            </Grid>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatchAddCourse: (courseObj) => dispatch(startAddCourse(courseObj))
});

export default connect(undefined, mapDispatchToProps)(AddCourse);