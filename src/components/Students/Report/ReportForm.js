import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";
import makeCourseFormStyles from "../../../styles/makeStyles/makeCourseFormStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(makeCourseFormStyles);

const ReportForm = (props) => {

    const classes = useStyles();

    // State 0. Error handling, and isEdit.
    const [error, setError] = useState("");

    const [edit, setEdit] = useState(props.isEdit || false);

    // State 1. Report Type
    const [reportType, setType] = useState((props.isEdit)
        ? props.target.type : props.defaultAdd);
    const handleType = (e) => setType(e.target.value);

    // State 2. Title
    const [title, setTitle] = useState((props.isEdit)
        ? props.target.title : "");
    const handleTitle = (e) => setTitle(e.target.value);

    // State 3. Report Date
    const [date, setDate] = useState((props.isEdit)
        ? props.target.testDate : moment().valueOf());
    const handleDate = (date) => setDate(date);

    // State 4. Link
    const [docLink, setDocLink] = useState((props.isEdit)
        ? props.target.sourceLink : "");
    const handleDocLink = (e) => setDocLink(e.target.value);

    // Handle submit should be passed in by props. ID shouldn't be handled here.
    const handleSubmit = (e) => {
        e.preventDefault();

        const notComplete = title === "" || docLink === "" || reportType === "";
        if (notComplete) {
            setError("Please fill in all required fields!");
        } else {
            props.onSubmit({
                type: reportType,
                title: title,
                testDate: date,
                sourceLink: docLink,
            });
        }
    }

    return (
        <div>
            {
                error !== "" && <Alert severity={"warning"}>
                    {error}
                </Alert>
            }
            <Divider />
            <div className={classes.rootContainer}>
                <form noValidate onSubmit={handleSubmit}>
                    <Typography variant={"caption"} style={{ color: "#5f5f5f" }}>
                        Please keep each word of your title below <b>20 characters</b> for better display!
                    </Typography>
                    <FormControl variant="outlined" className={classes.formControl} required>
                        <InputLabel>Course Type</InputLabel>
                        <Select labelId="course-type-label" id="course-select"
                                value={reportType} onChange={handleType}>
                            <MenuItem value={""}>--</MenuItem>
                            <MenuItem value={"SAT"}>SAT</MenuItem>
                            <MenuItem value={"TOEFL"}>TOEFL</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField required className={classes.textFieldStyles} id="outlined-basic" label="Report Title"
                               value={title} size="small" variant="outlined" fullWidth onChange={handleTitle}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker className={classes.textFieldStyles}
                                            disableToolbar variant="inline" format="MM/dd/yyyy"
                                            margin="normal" id="date-picker-inline" label="Test Date"
                                            value={date} onChange={handleDate} />
                    </MuiPickersUtilsProvider>
                    <TextField className={classes.textFieldStyles} id="repeated-time" required
                               label="Document Link (e.g. Google Drive)" size="small" value={docLink}
                               variant="outlined" fullWidth onChange={handleDocLink}/>
                    <Button type="submit" variant="contained" className={classes.submit}>
                        {edit? "Save Edit" : "Submit"}
                    </Button>
                </form>
            </div>
            <Divider />
        </div>
    );
}

export default ReportForm;