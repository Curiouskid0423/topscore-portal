import React, {useState} from "react"
import clsx from "clsx";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import themehelper from "../../themes";
import {startSetContent} from "../../actions/content";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";


/**
 * StudentItem will be a card.
 * @param student is a student object from firebase.
 * @return a StudentItem object
 */

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    cardRoot: {
        maxWidth: 345,
        margin: "1rem auto",
        "&:hover": {
            cursor: "pointer",
        }
    },
    cardTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    linkStyles: {
        color: "inherit",
        textDecoration: "none",
    },
    pkgIdentifier: {
        display: "flex",
        justifyContent: "space-between"
    },
    packageIcon: {
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
        marginLeft: "4px"
    },
    pkgCourse: {
        backgroundColor: "#BD3A3A",     // Dark Red
    },
    pkgPlan: {
        backgroundColor: "#DCD3C0",     // Light Brown color
    },
    pkgApply: {
        backgroundColor: theme.palette.primary.main,
    },
}));



const StudentItem = (props) => {

    const classes = useStyles();

    const currentStudent = props.students.find((el) => el.id === props.id);
    const circleCourse = <div className={clsx(classes.packageIcon, classes.pkgCourse)} />
    const circlePlan = <div className={clsx(classes.packageIcon, classes.pkgPlan)} />
    const circleApply = <div className={clsx(classes.packageIcon, classes.pkgApply)} />
    const [backdrop, setBackdrop] = useState(false);
    const [blocked, setBlocked] = useState(false);

    const blockCheckOutMessage = (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={3500} onClose={() => setBlocked(false)}
            open={blocked}
        >
            <Alert severity={"warning"}>
                {`The student's supervisor has been set to ${currentStudent.supervisor}, which does not match with your login name.`}
            </Alert>
        </Snackbar>
    )

    const handleContent = () => {
        const blockCheckOut = props.currentViewer.type === "EDITOR"
            && !!currentStudent.supervisor
            && !props.currentViewer.name.toLowerCase().includes(currentStudent.supervisor.toLowerCase());
        if (blockCheckOut) {
            setBlocked(true);
        } else {
            props.dispatchGetContent(props.id);
            setBackdrop(true);
            // Set timeout for fetching `content` section
            setTimeout(() => {
                props.history.push(`/students/content/${props.id}`);
            }, 1500);
        }
    }

    return (
        <Card className={classes.cardRoot}>
                { blocked && blockCheckOutMessage }
                <ThemeProvider theme={themehelper}>
                    {/* Student Content */}
                    <CardContent>
                        <div className = {classes.cardTitle}>
                            <Typography variant="subtitle1">
                                {props.studentID}
                            </Typography>
                            <div className={classes.pkgIdentifier}>
                                {props.packageType.course && circleCourse}
                                {props.packageType.planning && circlePlan}
                                {props.packageType.apply && circleApply}
                            </div>
                        </div>
                        <Divider />
                        <Typography gutterBottom variant="h6" component="h6">
                            {props.firstName} {props.lastName}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {props.email}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {props.highSchool} <br/>
                            Class of {props.graduationYear}
                        </Typography>
                        {
                            props.family.phone !== "" && (<Typography variant="body1" color="textSecondary" component="p">
                                Parent&nbsp; <b>{props.family.phone}</b>
                            </Typography>)
                        }
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={handleContent}>
                                Check out
                        </Button>
                    </CardActions>
                </ThemeProvider>
                {/* Back drop on hold.  */}
                <Backdrop className={classes.backdrop} open={backdrop}>
                    <CircularProgress color="inherit" />
                </Backdrop>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    students: state.students || [],
    currentViewer: {
        name: state.util.loginName,
        type: state.util.loginType,
    },
});

const mapDispatchToProps = (dispatch) => ({
    dispatchGetContent: (id) => dispatch(startSetContent(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentItem));