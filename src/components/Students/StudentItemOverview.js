import React, {useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";

import SearchIcon from '@material-ui/icons/Search';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    flexStyle: {
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem"
    },
    avatarStyle: {
        marginRight: "1rem",
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: theme.palette.primary.light,
    },
    saveButton: {
        marginRight: "1rem",
        position: "relative",
        bottom: ".5rem",
    },
    tableHead: {
        backgroundColor: theme.palette.secondary.main,
    }
}));

const getStudent = (id, studentList) => studentList.find((item) => item.id === id);

const StudentItemOverview = (props) => {

    const classes = useStyles();
    console.log("OVERVIEW", props);

    const current = getStudent(props.match.params.id, props.studentList);

    const rows = [
        ["Test Date", moment(current.contact.preTestResult.date).format('MMM Do YYYY')],
        ["Reading", current.contact.preTestResult.reading],
        ["Writing", current.contact.preTestResult.writing],
        ["Math", current.contact.preTestResult.math],
        ["Optional Writing", current.contact.preTestResult.essay]
    ]


    return (
        <Grid container className={classes.root}>
            <Grid item sm={7}>
                <div className={classes.flexStyle} style={{ justifyContent: "space-between", }}>
                    <div className={classes.flexStyle}>
                        <Avatar className={classes.avatarStyle} > <SearchIcon/> </Avatar>
                        <Typography variant={"h5"} component={"span"}>
                            <span style={{ fontWeight: 500 }}>AT A GLANCE</span>
                        </Typography>
                    </div>
                    <div>
                        <Button size={"small"} variant={"outlined"} className={classes.saveButton}>
                            <Typography variant={"button"} component={"p"}>
                                Save
                            </Typography>
                        </Button>
                    </div>
                </div>
                <div>
                    <Paper elevation={3} style={{margin: "0 1rem 1rem 0"}}>
                        <TextField
                            id="outlined-multiline-static" label="Notes" multiline rows={5}
                            defaultValue={props.overview.atAGlance.notice} variant="outlined" fullWidth/>
                    </Paper>
                    <Divider variant="middle" style={{ width: "91%" }}/>
                    <Paper elevation={3} style={{margin: "1rem 1rem 1rem 0"}}>
                        <TextField
                            id="outlined-multiline-static" label="Family Info (Sibling Information)"
                            multiline rows={5} defaultValue={props.overview.atAGlance.familyInfo}
                            variant="outlined" fullWidth/>
                    </Paper>
                </div>
            </Grid>
            <Grid item sm={5}>
                <div className={classes.flexStyle}>
                    <Avatar className={classes.avatarStyle} > <AssignmentTurnedInIcon/> </Avatar>
                    <Typography variant={"h5"} component={"span"}>
                        <span style={{ fontWeight: 500 }}>PRE-TEST RESULT</span>
                    </Typography>
                </div>
                <div>
                    {/* Pre-test result table */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    <TableCell style={{ color: "#fff" }}>Entry</TableCell>
                                    <TableCell align={"right"} style={{ color: "#fff" }}>
                                        Score
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row[0]}>
                                        <TableCell component="th" scope="row">{row[0]}</TableCell>
                                        <TableCell align="right"> {row[1]} </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Grid>
        </Grid>
    );
}


const mapStateToProps = (state) => ({
    studentList: state.students,
    overview: state.content.partOverview
});

export default connect(mapStateToProps)(withRouter(StudentItemOverview));