import React, {useState} from "react";
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

const useStyles = makeStyles({
   currentRoot: {
       height: "30vh",
       marginTop: "1rem"
   },
    courseListStyles: {
       margin: "0 0 0 .5rem",
       maxHeight: "50vh",
    },
    searchBar: {
        display: "flex",
        "& button": {
            marginLeft: "1rem", marginTop: ".25rem", marginRight: ".25rem",
            background: "#DCD3C0",
        }
    }
});

const StudentItemCore = (props) => {
    const classes = useStyles();

    const [search, setSearch] = useState("");
    const handleSearch = (e) => setSearch(e.target.value);

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
                        <TableHead>
                            <TableRow>
                                <TableCell>CourseName</TableCell>
                                <TableCell align={"right"}>
                                    Instructor
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" colSpan={2}>
                                    <div className={classes.searchBar}>
                                        <TextField id="add-classes" label="Enroll in New Course" size="small"
                                                   onChange={handleSearch} fullWidth/>
                                        <Button variant={"contained"}> Add </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            {props.courseList.map((row) => (
                                <TableRow key={row.uid}>
                                    <TableCell component="th" scope="row">{row.courseName}</TableCell>
                                    <TableCell align="right"> {row.instructor} </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    courseList: state.courses,
    content: state.content.partCore,
})

export default connect(mapStateToProps)(StudentItemCore);