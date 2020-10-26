import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import themehelper from "../../themes";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        background: "rgba(255, 248, 221, 0.7)",
    },
    rootContainer: {
        padding: "2rem",
    },
    titleStyles: {
        paddingTop: "1rem",
        paddingLeft: "2.5rem",
        textTransform: "uppercase",
        color: "#5B3330"
    },
    textFieldStyles: {
        margin: "1rem .5rem"
    },
    rowName: {
        paddingLeft: ".5rem",
        marginRight: "3rem",
    },
    rowContainer: {
        display: "flex",
        marginBottom: ".6rem"
    }
}));

/**
 * Update Account Page Component
 */
const UpdateAccount = (props) => {
    const classes = useStyles();

    // State: Either ADMIN or EDITOR
    const editorText = (
        "Editor (consultant) roles may manage course and one's students' data on TopScore Portal. " +
        "Here are some cautions to keep in mind: "
        + "1. Editors cannot EDIT, or view advanced info of students whom you are not supervisor of. "
        + "2. Editors are NOT permitted to ADD or REMOVE any users. "
        + "3. Any malicious actions attempting to breach system security, or to tamper with company data are recorded in the activity log. "
        + "If you have observed a bug in system design, please contact the ADMIN user, or the developer."
    );

    const adminText = (
        <span>
            Admin has access to all actions across the portal. Any new user has to be added via admin portal.<br/>
            Any malicious actions attempting to breach system security, or to tamper with company data are recorded in the activity log.
            If you have observed a bug in system design, please contact the ADMIN user, or the developer.
        </span>
    );

    return (
        <Grid item sm={12} style={{ width: "85%" }}>
            <Paper elevation={3}>
                <Typography component="h2" variant="h6"
                            gutterBottom className={classes.titleStyles}>
                    About Account
                </Typography>
                <Divider />
                <div className={classes.rootContainer}>
                    {/* 1. User Type */}
                    <div className={classes.rowContainer}>
                        <ThemeProvider theme={themehelper}>
                            <Typography component="h2" variant="h6" className={classes.rowName}>
                                User Type:
                            </Typography>
                            <Chip avatar={<Avatar>{ props.loginType[0].toUpperCase() }</Avatar>} label={ props.loginType }
                                  color="primary" clickable variant="outlined" />
                        </ThemeProvider>
                    </div>
                    {/* 2. User Email */}
                    <div className={classes.rowContainer}>
                        <ThemeProvider theme={themehelper}>
                            <Typography component="h2" variant="h6" className={classes.rowName}>
                                Current Login Email:
                            </Typography>
                            <Typography component="h2" variant="h6" style={{ fontWeight: 400 }}> { props.loginEmail } </Typography>
                        </ThemeProvider>
                    </div>
                    {/* 3. Manual */}
                    <div className={classes.rowContainer}>
                        <ThemeProvider theme={themehelper}>
                            <Card className={classes.cardContainer}>
                                <CardContent>
                                    <Typography component="h3" variant="h6" className={classes.title} color="textSecondary" gutterBottom>
                                        Manual
                                    </Typography>
                                    <Typography component="p" variant="body1">
                                        { props.loginType === "EDITOR" && editorText }
                                        { props.loginType === "ADMIN" || props.loginType === "DEVELOPER" && adminText }
                                    </Typography>
                                </CardContent>
                            </Card>
                        </ThemeProvider>
                    </div>
                </div>
            </Paper>
        </Grid>
    )
};

const mapStateToProps = (state) => ({
    loginType: state.util.loginType,
    loginEmail: state.util.loginEmail,
});

export default connect(mapStateToProps)(UpdateAccount);