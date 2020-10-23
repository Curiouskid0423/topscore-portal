import React, {useEffect} from "react";
import Dashboard from "../defaults/Templates";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    logoHolder:{
        maxWidth: "50%",
        display: "block",
        margin: "auto"
    },
    topStyles: {
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
        margin: "0 1.5rem 1rem 1.5rem",
        padding: "2rem 2rem",
        border: ".1px solid #7c7c7c8c",
        borderRadius: ".2rem",
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
                </Grid>
            </Grid>
            <Grid item md={12}>
                <Calendar />
            </Grid>
        </Grid>
    )
};

const mapStateToProps = (state) => ({
    loginName: state.util.loginName,
})

const WrappedHome = () => <Dashboard content={connect(mapStateToProps)(Home)} />;


export default WrappedHome;