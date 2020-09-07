import React, {useEffect} from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import clsx from "clsx";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Dashboard from "../defaults/Templates";
import ContentTabs from "./ContentTabs";
import personalStyles from "../../styles/makeStyles/makeStudentPersonalStyles";

const useStyles = makeStyles(personalStyles);

const getStudent = (id, studentList) => studentList.find((item) => item.id === id);

const StudentPersonalPage = (props) => {
    const currentStudent = getStudent(props.match.params.id, props.students);

    const classes = useStyles();
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
                                <Grid item sm={2}>
                                    <Typography variant={"subtitle1"} color="textSecondary" gutterBottom>
                                        Basic Information
                                    </Typography>
                                </Grid>
                                <Grid item sm={6}>
                                    {chipApply} {chipPlan}
                                </Grid>
                            </Grid>
                            {/*  Contact Information  */}
                            <Grid container>
                                <Grid item sm={2}>
                                    <Typography variant="h6" component="h2">
                                        {currentStudent.contact.firstName}&nbsp;
                                        {currentStudent.contact.lastName}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        SID: {currentStudent.contact.studentID}
                                    </Typography>
                                    <Link to={`../edit/${currentStudent.id}`} className={classes.linkStyles}>
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
                                <Grid item sm={4}>
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
                                    <a href={currentStudent.contact.recordOfFirstAppt}>
                                        <Chip className={classes.docLink} clickable icon={<BeenhereIcon />} label={"初談紀錄"}/>
                                    </a>
                                    <a href={currentStudent.contact.collegeList}>
                                        <Chip className={classes.docLink} clickable icon={<BeenhereIcon />} label={"申請大學名單"}/>
                                    </a>
                                    <a href={currentStudent.contact.transcript}>
                                        <Chip className={classes.docLink} clickable icon={<BeenhereIcon />} label={"高中成績單"}/>
                                    </a>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            {/* Content tabs */}
            <Grid container item sm={12}>
                <ContentTabs />
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        students: state.students,
        hasContent: state.content !== {}
    }
}

const WrappedStudentPage = () => <Dashboard
    content={connect(mapStateToProps)(withRouter(StudentPersonalPage))}
/>;

export default WrappedStudentPage;