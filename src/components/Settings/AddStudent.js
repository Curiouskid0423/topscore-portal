import React from "react";
import Grid from "@material-ui/core/Grid";
import StudentForm from "./StudentForm";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({

})

const AddStudent = () => {
    const classes = useStyles();
    

    return (
        <Grid item sm={12}>
            <StudentForm />
        </Grid>
    )
};



export default AddStudent;