import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        padding: "2rem",
        maxHeight: "550px",
        overflowY: "scroll"
    },
    categoryTitle: {
        marginLeft: ".5rem"
    },
    titleStyles: {
        paddingTop: "1rem",
        paddingLeft: "2.5rem",
        textTransform: "uppercase",
        color: "#5B3330"
    },
    textFieldStyles: {
        margin: "1rem .5rem"
    },
    submit: {
        margin: "1rem .5rem",
    },
}));

const StudentForm = () => {
    const classes = useStyles();
    return (
        <Paper elevation={3}>
            <Typography component="h2" variant="h6"
                        gutterBottom className={classes.titleStyles}>
                Add New Student Info
            </Typography>
            <Divider />
            <div className={classes.rootContainer}>
                <form noValidate>
                    <Typography variant={"h6"} className={classes.categoryTitle}>
                        Contact Information
                    </Typography>
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Student ID"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="First Name"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Last Name"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Email"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" type="number"
                               label="Phone Number" size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="High School"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Graduation Year"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Attended College (if applicable)"
                               size="small" variant="outlined" fullWidth />
                    <Divider /><br/>
                    {/*  Family Info  */}
                    <Typography variant={"h6"} className={classes.categoryTitle}>
                        Family Information
                    </Typography>
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Parent (Primary Contact)"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Relationship"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Phone Number"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Email"
                               size="small" variant="outlined" fullWidth />
                    <Divider /><br/>
                    {/*  Other Relevant Info  */}
                    <Typography variant={"h6"} className={classes.categoryTitle}>
                        Other Relevant Contents
                    </Typography>
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Supervisor (consultant)"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Package Type"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Person of Recommendation"
                               size="small" variant="outlined" fullWidth />
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Email"
                               size="small" variant="outlined" fullWidth />
                    <Button type="submit" variant="contained" className={classes.submit}>
                        Submit
                    </Button>
                </form>
            </div>
        </Paper>
    )
}

export default StudentForm;