import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    flexContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    saveButton: {
        background: "#DCD3C0",
        padding: ".5rem 3.5rem",
    },
    textStyles: {
        width: "100%",
        marginBottom: "1rem",
    },
})

const CustomTabPanel = (props) => {

    const rowNumber = 12;
    const classes = useStyles();

    return (
        <div className={classes.flexContainer}>
            <Paper elevation={3} className={classes.textStyles}>
                <TextField id="compass-multiline-input" label={props.label}
                           multiline rows={rowNumber} variant="outlined" fullWidth/>
            </Paper>
            <Button className={classes.saveButton}> Save </Button>
        </div>
    )
}

export default CustomTabPanel;