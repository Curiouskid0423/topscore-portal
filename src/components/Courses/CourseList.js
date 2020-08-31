import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../defaults/Header";
import {Link, useRouteMatch} from "react-router-dom";

const StyledTitleCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#5B3330",
        color: theme.palette.common.white,
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
        maxHeight: "500px"
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
        marginRight: "1.5rem",
    }
});

// Table has 6 columns.
const tableTitles = ["Course ID", "Type", "Course Name", "Instructor", "Start Date", "Repeat By", "Edit"];

const CourseList = (props) => {
    const classes = useStyles();
    const { path } = useRouteMatch();
    return (
        <Container>
            <Grid item container md={12}>
                <Grid item sm={8}> <Header title={"COURSE Directory"} /> </Grid>
                <Grid item sm={4}>
                    <div className={classes.btnContainer}>
                        <Button variant="contained" className={classes.btnStyles}>
                            <Link to={`${path}/addCourse`} className={classes.linkStyles}>
                                Add New Course
                            </Link>
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table}>
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
                                <StyledTitleCell component={"th"} scope={"row"}>{entry.id}</StyledTitleCell>
                                <StyledTitleCell align="center">{entry.type}</StyledTitleCell>
                                <StyledTitleCell align="center">{entry.courseName}</StyledTitleCell>
                                <StyledTitleCell align="center">{entry.instructor}</StyledTitleCell>
                                <StyledTitleCell align="center">{entry.startDate}</StyledTitleCell>
                                <StyledTitleCell align="center">{entry.repeatBy}</StyledTitleCell>
                                <StyledTitleCell align="center">
                                    <Button>Edit</Button>
                                </StyledTitleCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
};

const mapStateToProps = (state) => ({
    courseList: state.courses
})


export default connect(mapStateToProps)(CourseList);