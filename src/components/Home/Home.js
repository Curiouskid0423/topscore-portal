import React, {useEffect, useState} from "react";
import Dashboard from "../defaults/Templates";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
    buttonStyles: {
      width: "11rem",
      color: "#D8AD48",
      marginTop: "1rem"
    },
    logoHolder:{
        maxWidth: "60%",
        display: "block",
        margin: "auto"
    },
    topStyles: {
        border: ".1px solid #7c7c7c1f",
        borderRadius: ".2rem",
        boxShadow: "0px 10px 30px -4px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
        margin: "0 1.5rem 1rem 1.5rem",
        padding: "2rem",
    },
    greetingMsg: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    subtitleGreet: {
        color: "#7c7c7c",
        fontWeight: 400
    }
}))

const Home = (props) => {

    const classes = useStyles();
    const [displayHelp, setDisplayHelp] = useState(false);
    const handleHelpClose = () => setDisplayHelp(false);
    const handleHelpOpen = () => setDisplayHelp(true);


    return (
        <Grid container>
            {/*<Header title={"DASHBOARD"} />*/}
            <Grid item md={12} className={classes.topStyles}>
                <Grid item md={2}>
                    <img className={classes.logoHolder} src={"/images/high-res-logo.png"} />
                </Grid>
                <Grid item md={10} className={classes.greetingMsg}>
                    <Typography variant={"h4"}>Hello, {props.loginName}.</Typography>
                    <Typography variant={"h6"} className={classes.subtitleGreet}>
                        Welcome to TopScore Portal. The following is your schedule of the week.
                    </Typography>
                    <Button className={classes.buttonStyles} size={"small"} onClick={handleHelpOpen}>
                        Cannot see Calendar?
                    </Button>
                </Grid>
            </Grid>
            <Grid item md={12}>
                <Calendar />
            </Grid>

            {/*  Help on Calendar Display Dialog  */}
            <Dialog open={displayHelp} onClose={handleHelpClose}>
                <DialogTitle id="alert-dialog-title">Cannot see your Calendar?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        As of September 2020, if you are using Safari to view this application, try going to
                        <b>Safari Preferences > Privacy</b> and disable the setting "<b>Prevent Cross-Site Tracking</b>".
                        Chrome should be fine with displaying the calendar if you are logged in to your google account already.
                        For other questions, contact technical support.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleHelpClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
};

const mapStateToProps = (state) => ({
    loginName: state.util.loginName,
})

const WrappedHome = () => <Dashboard content={connect(mapStateToProps)(Home)} />;


export default WrappedHome;