import React, {useEffect, useState} from "react";
import moment from "moment";
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../defaults/Header";
import {Link, useRouteMatch} from "react-router-dom";
import MessageSnackbar from "../MessageSnackbar";
import {startRemoveCourse} from "../../actions/courses";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import getVisibleCourse from "../../selectors/getVisibleCourse";
import {setCourseQuery} from "../../actions/filters";
import themehelper from "../../themes";

const StyledTitleCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#DBD3C0",
        color: theme.palette.common.white,
        fontSize: 17
    },
    body: {
        fontSize: 14
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 1000,
    },
    tableContainer: {
        maxHeight: "550px",
        minWidth: "81vw",
        maxWidth: "90vw",
    },
    btnStyles: {
        marginRight: ".5rem",
    },
    linkStyles: {
        color: "inherit",
        textDecoration: "none",
    },
    btnContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: ".6rem"
    }
});

// Table has 6 columns.
const tableTitles = [
    "Course ID", "Type", "Course Name",
    "Instructor", "Start Date", "Repeat By",
    "Edit", "Remove"
];

const CourseList = (props) => {
    const classes = useStyles();
    const { path } = useRouteMatch();
    const [search, setSearch] = useState(props.query);
    const [dialogOpen, setDialogChange] = useState(false);
    const [removeTarget, setRemoveTarget] = useState("");

    // Upon un-mounting, clear the query string.
    useEffect(() => {
        return () => props.dispatchSearch("");
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        props.dispatchSearch(e.target.value);
    }

    const stageRemoval = (uid) => {
        setRemoveTarget(uid);
        setDialogChange(!dialogOpen);
    };

    const clearRemoval = () => {
        setDialogChange(!dialogOpen);
        setRemoveTarget("");
    }

    const confirmRemoval = () => {
        setDialogChange(!dialogOpen);
        if (removeTarget !== "") {
            props.dispatchRemove(removeTarget);
        }
        setRemoveTarget("");
    }

    return (
        <Container>
            {/* Snackbar */}
            { (props.submitStatus !== "") && <MessageSnackbar submitStatus={props.submitStatus} />}
            <Grid item container md={12}>
                <ThemeProvider theme={themehelper}>
                    <Grid item md={7} sm={12}> <Header title={"COURSE DIRECTORY"} /> </Grid>
                    <Grid item md={3} sm={4}>
                        <TextField id="standard-basic" label="Search" fullWidth
                                   value={search} onChange={handleSearch}/>
                    </Grid>
                    <Grid item md={2} sm={4}>
                        <div className={classes.btnContainer}>
                            <Button variant="contained" className={classes.btnStyles}>
                                <Link to={`${path}/addCourse`} className={classes.linkStyles}>
                                    Add New Course
                                </Link>
                            </Button>
                        </div>
                    </Grid>
                </ThemeProvider>
            </Grid>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table stickyHeader className={classes.table}>
                    {/*  Header */}
                    <TableHead>
                        <TableRow>
                            {tableTitles.map((colName) => (
                                <StyledTitleCell align="center" key={colName}>
                                    {colName}
                                </StyledTitleCell>)
                            )}
                        </TableRow>
                    </TableHead>
                    {/*  Table Body  */}
                    <TableBody>
                        {props.courseList.map((entry) => (
                            <StyledTableRow key={entry.uid}>
                                <StyledTitleCell component={"th"} scope={"row"}>{entry.uid.substring(1,)}</StyledTitleCell>
                                <StyledTitleCell align="center">{entry.type}</StyledTitleCell>
                                <StyledTitleCell align="center">{entry.courseName}</StyledTitleCell>
                                <StyledTitleCell align="center">{entry.instructor}</StyledTitleCell>
                                <StyledTitleCell align="center">
                                    { moment(entry.startDate).format('MMM Do YYYY') }
                                </StyledTitleCell>
                                <StyledTitleCell align="center">{entry.repeatBy}</StyledTitleCell>
                                <StyledTitleCell align="center">
                                    <Link to={`${path}/editCourse/${entry.uid}`} className={classes.linkStyles}>
                                        <Button>Edit</Button>
                                    </Link>
                                </StyledTitleCell>
                                <StyledTitleCell align="center">
                                    <Button onClick={() => stageRemoval(entry.uid)}>Remove</Button>
                                </StyledTitleCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Course Removal Dialog */}
            <Dialog open={dialogOpen} onClose={clearRemoval}>
                <DialogTitle id="alert-dialog-title">Sure about Removing this course?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Removal would be final and cannot be recovered.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={clearRemoval} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmRemoval} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
};

const mapStateToProps = (state) => ({
    courseList: getVisibleCourse(state.filters.visibleCourses.query, state.courses),
    submitStatus: state.util.submitStatus || "",
    query: state.filters.visibleCourses.query
});

const mapDispatchToProps = (dispatch) => ({
    dispatchRemove: (id) => dispatch(startRemoveCourse(id)),
    dispatchSearch: (query) => dispatch(setCourseQuery(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);