import React, {useEffect, useState} from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import clsx from "clsx";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Dashboard from "../defaults/Templates";
import ContentTabs from "./ContentTabs";
import personalStyles from "../../styles/makeStyles/makeStudentPersonalStyles";
import themehelper from "../../themes";
import {startChangeBlackList, startChangeVIP} from "../../actions/students";

const useStyles = makeStyles(personalStyles);

const getStudent = (id, studentList) => studentList.find((item) => item.id === id);

const StudentPersonalPage = (props) => {

    const currentStudent = getStudent(props.match.params.id, props.students);
    const classes = useStyles();

    // State for checkbox (isVIP and isBlacklist).
    const [isVIP, setIsVIP] = useState(currentStudent.contact.specialId.isVIP);
    const [isBlacklist, setIsBlacklist] = useState(currentStudent.contact.specialId.isBlackList);

    const handleVIP = (e) => {
        setIsVIP(e.target.checked);
        props.dispatchChangeVIP(currentStudent.id, e.target.checked);
    }
    const handleBlacklist = (e) => {
        setIsBlacklist(e.target.checked);
        props.disptachChangeBlackList(currentStudent.id, e.target.checked);
    }

    const chipCourse = <Chip className={clsx(classes.pkgButton, classes.pkgCourse)}
                             size="small" label="課程生" />
    const chipApply = <Chip className={clsx(classes.pkgButton, classes.pkgApply)}
                            size="small" label="代辦生" />
    const chipPlan = <Chip className={clsx(classes.pkgButton, classes.pkgPlan)}
                           size="small" label="規劃生" />
    return (
        <Container>
            {/* Student Basic Info */}
            <Grid container item sm={12} className={classes.gridCentered}>
                <Paper elevation={3} className={classes.infoColumn}>
                    <Card className={classes.cardContainer}>
                        <CardContent>
                            {/* Title */}
                            <Grid container>
                                <ThemeProvider theme={themehelper}>
                                    <Grid item sm={2}>
                                        <Typography variant={"subtitle1"} color="textSecondary" gutterBottom>
                                            Basic Information
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6}>
                                        {currentStudent.contact.packageType.apply && chipApply}
                                        {currentStudent.contact.packageType.planning && chipPlan}
                                        {currentStudent.contact.packageType.course && chipCourse}
                                    </Grid>
                                </ThemeProvider>
                            </Grid>
                            {/*  Contact Information  */}
                            <Grid container>
                                <Grid item sm={3}>
                                    <Typography variant="h6" component="h2">
                                        {currentStudent.contact.firstName} &nbsp;
                                        {currentStudent.contact.lastName}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        SID: {currentStudent.contact.studentID}
                                    </Typography>
                                    <Link to={`../../settings/editStudent/${currentStudent.id}`} className={classes.linkStyles}>
                                        <Button color={"primary"} className={classes.editStudent}>
                                            Edit Student
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item sm={4}>
                                    <Typography color="textSecondary">High School</Typography>
                                    <Typography variant="subtitle1" component="p" className={classes.pos}>
                                        <b>
                                            {currentStudent.contact.highSchool}, Class of&nbsp;
                                            {currentStudent.contact.graduationYear}
                                        </b>
                                    </Typography>
                                    <Grid container item sm={12}>
                                        <Grid item sm={6}>
                                            <Typography color="textSecondary">Parent</Typography>
                                            <Typography variant="subtitle1" component="p" className={classes.pos}>
                                                <b>{currentStudent.contact.family.parent}</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Typography color="textSecondary">Rec</Typography>
                                            <Typography variant="subtitle1" component="p" className={classes.pos}>
                                                <b>{(currentStudent.contact.personOfRecommendation === "")?
                                                    "N/A" : currentStudent.contact.personOfRecommendation}</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm={3}>
                                    <Typography color="textSecondary">Phone Number</Typography>
                                    <Typography variant="subtitle1" component="p" className={classes.pos}>
                                        <b>{currentStudent.contact.phone}</b>
                                    </Typography>
                                    <Typography color="textSecondary">Attended College</Typography>
                                    <Typography variant="subtitle1" component="p" className={classes.pos}>
                                        <b>{currentStudent.contact.attendedCollege}</b>
                                    </Typography>
                                </Grid>
                                <Grid item sm={2}>
                                    {/* First appt Record */}
                                    <a href={currentStudent.contact.recordOfFirstAppt}>
                                        <Chip className={classes.docLink} clickable icon={<BeenhereIcon />} label={"初談紀錄"}/>
                                    </a>
                                    {/* Is VIP */}
                                    <Chip className={classes.specialIdStyles} label={
                                        <span>
                                            <Checkbox checked={isVIP} color={"primary"} onChange={handleVIP}/>
                                            <Typography component={"span"} variant={"button"}>VIP</Typography>
                                        </span>
                                    } />
                                    {/* Is Blacklist */}
                                    <Chip className={classes.specialIdStyles} label={
                                        <span>
                                            <Checkbox checked={isBlacklist} color={"primary"} onChange={handleBlacklist}/>
                                            <Typography component={"span"} variant={"button"}>Blacklist</Typography>
                                        </span>
                                    } />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            {/* Content tabs */}
            <Grid container item sm={12}>
                <ContentTabs studentID={props.match.params.id}/>
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    students: state.students,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchChangeVIP: (id, value) => dispatch(startChangeVIP(id, value)),
    disptachChangeBlackList: (id, value) => dispatch(startChangeBlackList(id, value)),
})

const WrappedStudentPage = () => <Dashboard
    content={connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentPersonalPage))}
/>;

export default WrappedStudentPage;