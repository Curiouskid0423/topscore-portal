import React from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {startEditStudent, startRemoveStudent} from "../../actions/students";

const EditStudentContact = (props) => {
    const id = props.match.params.id;
    const handleSubmit = (studentObj) => {
        props.dispatchEdit(studentObj, id);
        props.history.push("/students");
    }
    const handleRemoval = (studentObj) => {
        props.dispatchRemove(id);
        props.history.push("/students");
    }

    console.log(props);
    return (
        <Grid item sm={12}>
            <StudentForm onSubmit={handleSubmit} onRemoval={handleRemoval}
                         isEdit={true} student={props.student} />
        </Grid>
    )
}

const mapStateToProps = (state, ownProps) => ({
    student: state.students.find((el) => el.id === ownProps.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    dispatchEdit: (studentObj, id) => dispatch(startEditStudent(studentObj, id)),
    dispatchRemove: (id) => dispatch(startRemoveStudent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudentContact);