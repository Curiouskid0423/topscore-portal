import React from "react";
import Grid from "@material-ui/core/Grid";
import StudentForm from "../Students/StudentForm";
import {makeStyles} from "@material-ui/core/styles";
import { connect } from "react-redux";
import {startAddStudent} from "../../actions/students";

const useStyles = makeStyles({

})

const AddStudent = (props) => {

    const handleSubmit = (studentObj) => {
        props.dispatchAddStudent(studentObj);
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