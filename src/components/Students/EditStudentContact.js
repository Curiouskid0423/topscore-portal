import React from "react";
import StudentForm from "./StudentForm";
import Grid from "@material-ui/core/Grid";

const EditStudentContact = () => {

    const handleSubmit = () => {

    }

    return (
        <Grid item sm={12}>
            <StudentForm onSubmit={handleSubmit} isEdit={true}/>
        </Grid>
    )
}

export default EditStudentContact;