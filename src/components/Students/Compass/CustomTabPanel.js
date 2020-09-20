import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {startUpdateCompass} from "../../../actions/content";
import {connect} from "react-redux";

const useStyles = makeStyles({
    flexContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    buttonGroup: {
      display: "flex",
      "& button": {
          margin: ".5rem"
      }
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
    // Value state of this component.
    const [currentVal, setCurrent] = useState(props.value);
    const handleCurrentVal = (e) => setCurrent(e.target.value);

    const handleSubmit = () => {
        props.dispatchCompass(currentVal, props.match.params.id, props.id);
    }

    return (
        <div className={classes.flexContainer}>
            <Paper elevation={3} className={classes.textStyles}>
                <TextField id="compass-multiline-input" label={props.label} value={currentVal}
                           onChange={handleCurrentVal} multiline rows={rowNumber} variant="outlined" fullWidth/>
            </Paper>
            <div className={classes.buttonGroup}>
                <Button className={classes.saveButton} onClick={handleSubmit}> Save </Button>
                <Button className={classes.saveButton}> Export All to PDF </Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchCompass: (compassObj, id, command) => dispatch(startUpdateCompass(compassObj, id, command))
})

export default connect(undefined, mapDispatchToProps)(withRouter(CustomTabPanel));