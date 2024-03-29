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
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

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
        background: "#BD3A3A",
        color: "#FFFFFF",
        marginRight: ".5rem",
        "&:hover": {
            background: "#F78A8A"
        }
    },
    linkStyles: {
        color: "inherit",
        textDecoration: "none",
    },
    btnContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: ".6rem"
    },
    courseDirStyles: {
        background: "#F3DFAF45",
        marginBottom: "1rem",
        padding: "1.2rem 1rem 0rem 1.5rem",
        borderRadius: "5px",
        border: ".1px solid #7c7c7c12",
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
    // State to open dialog for confirming removal.
    const [dialogOpen, setDialogChange] = useState(false);
    // State of current remove target.
    const [removeTarget, setRemoveTarget] = useState("");
    // state for block message if not admin.
    const [blocked, setBlocked] = useState(false);

    // Upon un-mounting, clear the query string.
    useEffect(() => {
        return () => props.dispatchSearch("");
    }, []);

    const blockedMessage = (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={3500}
            onClose={() => setBlocked(false)} open={blocked}
        >
            <Alert severity={"warning"}>
                {`Dear ${props.loginType}, only ADMIN users are allowed to remove courses!`}
            </Alert>
        </Snackbar>
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
        props.dispatchSearch(e.target.value);
    }

    const stageRemoval = (uid) => {
        if (props.loginType === "ADMIN") {
            setRemoveTarget(uid);
            setDialogChange(!dialogOpen);
        } else {
            setBlocked(true);
        }
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
            { blocked && blockedMessage }
            <Grid item container md={12} className={classes.courseDirStyles}>
                <ThemeProvider theme={themehelper}>
                    <Grid item md={7} sm={12}>
                        <Header title={"COURSE DIRECTORY"} />
                    </Grid>
                    <Grid item md={3} sm={4}>
                        <TextField id="standard-basic" label="Search (course / instructor)" fullWidth
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
    query: state.filters.visibleCourses.query,
    loginType: state.util.loginType,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchRemove: (id) => dispatch(startRemoveCourse(id)),
    dispatchSearch: (query) => dispatch(setCourseQuery(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);