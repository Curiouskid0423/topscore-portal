import React, {useState} from "react";
import 'date-fns';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        padding: "2rem"
    },
    formControl: {
        margin: theme.spacing(1.5),
        minWidth: 200,
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
}));

const AddCourse = () => {
    const classes = useStyles();
    // Handle Type Select
    const [courseType, setType] = useState("");
    const handleType = (e) => setType(e.target.value);
    // Handle Date Change
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => setSelectedDate(date);

    return (
        <Grid item sm={12}>
            <Paper elevation={3}>
                <Typography component="h2" variant="h6"
                            gutterBottom className={classes.titleStyles}>
                   Add New Course
                </Typography>
                <Divider />
                <div className={classes.rootContainer}>
                    <form noValidate>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Course Type</InputLabel>
                            <Select labelId="course-type-label" id="course-select"
                                    value={courseType} onChange={handleType}>
                                <MenuItem value={""}>--</MenuItem>
                                <MenuItem value={"GROUP"}>Group</MenuItem>
                                <MenuItem value={"1_ON_1"}>1-on-1</MenuItem>
                                <MenuItem value={"ENGAGEMENT"}>Engagement</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField className={classes.textFieldStyles} id="outlined-basic" label="Course Name"
                                   size="small" variant="outlined" fullWidth />
                        <TextField className={classes.textFieldStyles} id="outlined-basic" label="Instructor"
                                   size="small" variant="outlined" fullWidth />
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <KeyboardDatePicker className={classes.textFieldStyles}
                                    disableToolbar variant="inline" format="MM/dd/yyyy"
                                    margin="normal" id="date-picker-inline" label="Start Date"
                                    value={selectedDate} onChange={handleDateChange} />
                        </MuiPickersUtilsProvider>
                        <TextField className={classes.textFieldStyles} id="outlined-basic" label="Repeat By"
                                   size="small" variant="outlined" fullWidth />
                        <TextField className={classes.textFieldStyles} id="outlined-basic" label="Repeat Times"
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

export default AddCourse;