import React, {useState} from "react";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import makeCourseFormStyles from "../../styles/makeStyles/makeCourseFormStyles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(makeCourseFormStyles);

const CourseForm = (props) => {
    const classes = useStyles();
    const target = props.course;
    const edit = props.isEdit;

    // Handle Error State
    const [error, setError] = useState("");
    const handleError = (message) => setError(message);
    // Handle Type Select (prop 1)
    const [courseType, setType] = useState(edit? target.type : "");
    const handleType = (e) => setType(e.target.value);
    // Handle Date Change (prop 2)
    const [selectedDate, setSelectedDate] = useState(
        edit? moment(target.startDate) : moment());
    const handleDateChange = (date) => setSelectedDate(date);
    // Handle RepeatBy Change (prop 3)
    const [repeatBy, setRepeatBy] = useState(edit? target.repeatBy : "");
    const handleRepeatBy = (e) => setRepeatBy(e.target.value);
    // Handle Set Name. (prop 4)
    const [name, setName] = useState(edit? target.courseName : "");
    const handleName = (e) => setName(e.target.value);
    // Handle Instructor. (prop 5)
    const [instructor, setInstructor] = useState(edit? target.instructor : "");
    const handleInstructor = (e) => setInstructor(e.target.value);
    // Handle Repeat Time. (prop 6)
    const [repeatTimes, setRepeatTimes] = useState(edit? target.repeatTimes : 0);
    const handleRepeatTimes = (e) => setRepeatTimes(e.target.value);

    // Submission Handler
    const handleAddCourse = (e) => {
        e.preventDefault();
        if (name === "" || instructor === "") {
            handleError("Please fill out the instructor and the course name.");
        }
        else {
            props.onSubmit({
                type: courseType,
                courseName: name,
                startDate: selectedDate.valueOf(),
                instructor, repeatBy, repeatTimes
            });
        }
    }

    return (
        <Paper elevation={3}>
            <Typography component="h2" variant="h6" gutterBottom className={classes.titleStyles}>
                {props.title}
            </Typography>
            <Divider />
            {
                error !== "" && <Alert severity={"warning"}>
                    {error}
                </Alert>
            }
            <div className={classes.rootContainer}>
                <form noValidate onSubmit={handleAddCourse}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Course Type</InputLabel>
                        <Select labelId="course-type-label" id="course-select"
                                value={courseType} onChange={handleType}>
                            <MenuItem value={""}>--</MenuItem>
                            <MenuItem value={"GROUP"}>Group</MenuItem>
                            <MenuItem value={"1_ON_1"}>1-on-1</MenuItem>
                            <MenuItem value={"ENGAGEMENT"}>Engagement</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField required className={classes.textFieldStyles} id="outlined-basic" label="Course Name"
                               value={name} size="small" variant="outlined" fullWidth onChange={handleName}/>
                    <TextField required className={classes.textFieldStyles} id="outlined-basic" label="Instructor"
                               value={instructor} size="small" variant="outlined" fullWidth onChange={handleInstructor}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker className={classes.textFieldStyles}
                                            disableToolbar variant="inline" format="MM/dd/yyyy"
                                            margin="normal" id="date-picker-inline" label="Start Date"
                                            value={selectedDate} onChange={handleDateChange} />
                    </MuiPickersUtilsProvider>
                    <FormControl variant={"outlined"} className={classes.formControl}>
                        <InputLabel>Repeat By</InputLabel>
                        <Select labelId="course-repeat-label" id="course-repeat-select"
                                value={repeatBy} onChange={handleRepeatBy}>
                            <MenuItem value={"weeks"}>Week</MenuItem>
                            <MenuItem value={"months"}>Month</MenuItem>
                            <MenuItem value={"days"}>Day</MenuItem>
                            <MenuItem value={""}>Do not repeat</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField className={classes.textFieldStyles} id="repeated-time"
                               type="number" label="Repeat Times" size="small" value={repeatTimes}
                               variant="outlined" fullWidth onChange={handleRepeatTimes}/>
                    <Button type="submit" variant="contained" className={classes.submit}>
                        {edit? "Save Edit" : "Submit"}
                    </Button>
                </form>
            </div>
        </Paper>
    );
}

export default CourseForm;