import React, {useEffect, useState} from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import CourseTable from "./CourseTable";
import TextField from "@material-ui/core/TextField";
import getVisibleCourse from "../../../selectors/getVisibleCourse";
import {setCourseQuery} from "../../../actions/filters";
import moment from "moment";
import {startAddCourseToStudent} from "../../../actions/content";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {PDFViewer} from "@react-pdf/renderer";
import MyDocument from "../PDFProcessing/PdfModal";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) => ({
    currentRoot: {
        height: "30vh",
        marginTop: "1rem"
    },
    courseListStyles: {
        margin: "0 0 0 .5rem",
        maxHeight: "70vh",
    },
    searchBar: {
        display: "flex",
        "& button": {
            marginLeft: "1rem", marginTop: ".25rem", marginRight: ".25rem",
            background: "#DCD3C0",
        }
    }
}));

const StudentItemCore = (props) => {
    const classes = useStyles();

    // Student's current course list
    const currentCourseList = Object.values(props.content.currentCourseList || []);
    // State for courseList (not for specific student) searching query
    const [search, setSearch] = useState(props.query);
    const handleSearch = (e) => {
        setSearch(e.target.value);
        props.dispatchSearch(e.target.value);
    }

    const [coursePromptOpen, setCoursePromptOpen] = useState(false);
    const [currentCourseID, setCurrentCourseID] = useState("");
    const handlePromptOpen = (courseID) => {
        setCurrentCourseID(courseID);
        setCoursePromptOpen(true);
    };
    const handlePromptClose = () => {
        setCurrentCourseID("");
        setCoursePromptOpen(false);
    };

    const handleAddCourse = (courseID) => {
        const courseExist = currentCourseList !== undefined
            && currentCourseList.find((el) => el.uid === courseID);
        if (!courseExist) {
            const candidateCourse = props.courseList.find((el) => el.uid === courseID);
            console.log(candidateCourse);
            setCoursePromptOpen(false);
            props.dispatchAddCourseToStudent(candidateCourse, props.studentID);
        }
    }

    // Upon un-mounting, clear the query string.
    useEffect(() => {
        return () => props.dispatchSearch("");
    }, []);

    return (
        <Grid container>
            <Grid item md={8} sm={12}>
                {/* Current Course.  */}
                <CourseTable title={"Current Course List"} isCurrent={true} lst={props.content.currentCourseList}/>
                {/* Past Courses.  */}
                <CourseTable title={"Past Courses"} lst={props.content.pastCourseList}/>
            </Grid>
            <Grid item md={4} sm={12}>
                {/* Add new course. */}
                <TableContainer component={Paper} className={classes.courseListStyles}>
                    <Table stickyHeader>
                        {/* Enroll Course __ Header */}
                        <TableHead>
                            <TableRow>
                                <TableCell>CourseName</TableCell>
                                <TableCell align={"right"} colSpan={2}>
                                    Instructor
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Enroll Course __ Body */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" colSpan={3}>
                                    <div className={classes.searchBar}>
                                        <TextField id="add-classes" label="Enroll in New Course" size="small"
                                                   onChange={handleSearch} value={search} fullWidth/>
                                    </div>
                                </TableCell>
                            </TableRow>
                            {props.courseList.map((row) => (
                                <TableRow key={row.uid}>
                                    <TableCell component="th" scope="row">
                                        <b>{row.courseName}</b> <br/>{moment(row.startDate).format('MMM \'YY')}
                                    </TableCell>
                                    <TableCell component="th" scope="row"> {row.instructor} </TableCell>
                                    <TableCell align="right" size={"small"}>
                                        <AddCircleIcon color={"primary"} fontSize={"small"}
                                                       onClick={() => handlePromptOpen(row.uid)}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            {/* Alert Dialog */}
            <Dialog open={coursePromptOpen} onClose={handlePromptClose} maxWidth={"sm"} fullWidth={true}>
                <DialogTitle id="alert-dialog-title">
                    Confirm Add Course to Student
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure about adding (<b>ID: { currentCourseID }</b>) to selected student? Course items
                        cannot be removed entirely after this action.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleAddCourse(currentCourseID)} color="primary">
                        Confirm
                    </Button>
                    <Button onClick={handlePromptClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Alert Dialog END*/}
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    courseList: getVisibleCourse(state.filters.visibleCourses.query, state.courses),
    content: state.content.partCore,
    query: state.filters.visibleCourses.query,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchSearch: (query) => dispatch(setCourseQuery(query)),
    dispatchAddCourseToStudent: (courseObj, studentID) => dispatch(startAddCourseToStudent(courseObj, studentID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentItemCore);