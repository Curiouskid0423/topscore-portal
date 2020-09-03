import React from "react";
import clsx from "clsx";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Dashboard from "../defaults/Templates";
import ContentTabs from "./ContentTabs";

const useStyles = makeStyles((theme) => ({
    infoColumn:{
        margin: theme.spacing(2),
    },
    cardContainer: {
        minWidth: "80vw",
        paddingLeft: "1rem"
    },
    docLink: {
        marginBottom: ".5rem",
        padding: "1rem"
    },
    editStudent: {
       marginBottom: ".5rem"
    },
    pos: {
        marginBottom: 12,
    },
    pkgCourse: {
        backgroundColor: theme.palette.primary.main,
    },
    pkgPlan: {
        backgroundColor: theme.palette.secondary.main,
    },
    pkgApply: {
        backgroundColor: theme.palette.info.main,
    },
    pkgButton: {
        marginRight: ".5rem",
        color: "#fff",
        padding: ".5rem"
    }
}))

const StudentPersonalPage = (props) => {
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
            <Grid container item sm={12}>
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
                                    {chipApply}
                                    {chipPlan}
                                </Grid>
                            </Grid>
                            {/*  Contact Information  */}
                            <Grid container>
                                <Grid item sm={2}>
                                    <Typography variant="h5" component="h2">
                                        {props.studentContact.firstName}
                                        {props.studentContact.lastName}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        SID: 3034914455
                                    </Typography>
                                    <Button color={"primary"} className={classes.editStudent}>
                                        Edit Student
                                    </Button>
                                </Grid>
                                <Grid item sm={4}>
                                    <Typography color="textSecondary">High School</Typography>
                                    <Typography variant="subtitle1" component="p" className={classes.pos}>
                                        <b>American School in Taichung, Class of 2019</b>
                                    </Typography>
                                    <Grid container item sm={12}>
                                        <Grid item sm={6}>
                                            <Typography color="textSecondary">Parent</Typography>
                                            <Typography variant="subtitle1" component="p" className={classes.pos}>
                                                <b>徐惠珍</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Typography color="textSecondary">Rec</Typography>
                                            <Typography variant="subtitle1" component="p" className={classes.pos}>
                                                <b>Albert Wang</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm={4}>
                                    <Typography color="textSecondary">Phone Number</Typography>
                                    <Typography variant="subtitle1" component="p" className={classes.pos}>
                                        <b>0912933348</b>
                                    </Typography>
                                    <Typography color="textSecondary">Attended College</Typography>
                                    <Typography variant="subtitle1" component="p" className={classes.pos}>
                                        <b>University of California, Berkeley</b>
                                    </Typography>
                                </Grid>
                                <Grid item sm={2}>
                                    <Chip className={classes.docLink} clickable icon={<BeenhereIcon />} label={"初談紀錄"}/>
                                    <Chip className={classes.docLink} clickable icon={<BeenhereIcon />} label={"申請大學名單"}/>
                                    <Chip className={classes.docLink} clickable icon={<BeenhereIcon />} label={"高中成績單"}/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid container item sm={12}>
                <ContentTabs />
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state, ownProps) => ({
    studentContact: state.students.find((item) => {
        return ownProps.match.params.id === item.id
    }),
    studentContent: state.content
})

const WrappedStudentPage = () => <Dashboard content={connect(mapStateToProps)(StudentPersonalPage)} />;

export default WrappedStudentPage;