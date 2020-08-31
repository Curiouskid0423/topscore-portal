import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        padding: "2rem"
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
    }
}))

/**
 * Update Account Page Component
 */
const UpdateAccount = () => {
    const classes = useStyles();
    return (
        <Grid item sm={12}>
            <Paper elevation={3}>
                <Typography component="h2" variant="h6"
                            gutterBottom className={classes.titleStyles}>
                    Update Account
                </Typography>
                <Divider />
                <div className={classes.rootContainer}>
                    <form noValidate>
                        <TextField className={classes.textFieldStyles} id="outlined-basic" label="User Type"
                                   size="small" variant="outlined" fullWidth />
                        <TextField className={classes.textFieldStyles} id="outlined-basic" label="Old Password"
                                   size="small" variant="outlined" fullWidth />
                        <TextField className={classes.textFieldStyles} id="outlined-basic" label="New Password"
                                   size="small" variant="outlined" fullWidth />
                        <TextField className={classes.textFieldStyles} id="outlined-basic" label="New Password Confirm"
                                   size="small" variant="outlined" fullWidth />
                        <Button type="submit" variant="contained" className={classes.submit}>
                            Submit
                        </Button>
                    </form>
                </div>
            </Paper>
        </Grid>
    )
};



export default UpdateAccount;