import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {paragraphFiller} from "../../fixtures";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        padding: "2.5rem"
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
        margin: "1rem .5rem"
    }
}))

/**
 * Manage User Page will only be accessible to Root User.
 * To prevent malicious actions:
 * 1. Show but disable this tab for regular users.
 * 2. If someone gets to this page by directly insert the url, check userType onSubmit!
 * @return {*}
 */
const ManageUsers = () => {
    const classes = useStyles();
    return (
        <Grid item sm={12}>
            <Paper elevation={3}>
                <Typography component="h2" variant="h6"
                            gutterBottom className={classes.titleStyles}>
                    Manage Users
                </Typography>
                <Divider />
                <div className={classes.rootContainer}>
                    {paragraphFiller}
                </div>
            </Paper>
        </Grid>
    )
};



export default ManageUsers;