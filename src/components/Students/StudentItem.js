import React from "react"
import clsx from "clsx";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import Typography from "@material-ui/core/Typography";
import themehelper from "../../themes";


/**
 * StudentItem will be a card.
 * @param student is a student object from firebase.
 * @return a StudentItem object
 */

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        maxWidth: 345,
        margin: "1rem"
    },
    cardTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
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
        backgroundColor: theme.palette.primary.main,
    },
    pkgPlan: {
        backgroundColor: theme.palette.secondary.main,
    },
    pkgApply: {
        backgroundColor: theme.palette.info.main,
    }
}))

const StudentItem = (props) => {

    const classes = useStyles();
    const circleCourse = <div className={clsx(classes.packageIcon, classes.pkgCourse)} />
    const circlePlan = <div className={clsx(classes.packageIcon, classes.pkgPlan)} />
    const circleApply = <div className={clsx(classes.packageIcon, classes.pkgApply)} />

    return (
        <Card className={classes.cardRoot}>
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
                            props.attendedCollege !== "" && (<Typography variant="body1" color="textSecondary" component="p">
                                <b>{props.attendedCollege}</b>
                            </Typography>)
                        }
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Check out
                        </Button>
                    </CardActions>
                </ThemeProvider>
        </Card>
    )
}

export default StudentItem;