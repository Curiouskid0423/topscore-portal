import React, {useEffect} from "react";
import Dashboard from "../defaults/Templates";
import Header from "../defaults/Header";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Calendar from "./Calendar";
import { makeStyles } from "@material-ui/core/styles";
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles((theme) => ({
    logoHolder:{
        maxWidth: "55%",
    },
    topStyles: {
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
        marginBottom: "1rem",
        marginLeft: "2rem"
    },
    typeWriter: {
        fontWeight: 400,
        letterSpacing: ".3rem",
        color: "#862929",
    }
}))

const Home = () => {

    const classes = useStyles();
    const sourceWord = "TOPSCORE";
    let index = 0;
    let typer = "";
    const typeWriter = () => {
       if (index < sourceWord.length) {
           typer += sourceWord[index];
           setTimeout(typeWriter, 50);
       }
    }

    useEffect(typeWriter, [typer]);

    return (
        <Grid container>
            {/*<Header title={"DASHBOARD"} />*/}
            <Grid item md={12} className={classes.topStyles}>
                <Grid item md={2}>
                    <img className={classes.logoHolder} src={"./images/high-res-logo.png"} alt={"round-logo"}/>
                </Grid>
                <Grid item md={10}>
                    <Typography variant={"h3"}>
                        <span style={{fontWeight: 300 }}>
                            WELCOME TO
                        </span>
                        <span className={classes.typeWriter}>
                            <Typewriter options={{
                                strings: ["TopScore Portal"],
                                autoStart: true, loop: true
                            }}/>
                        </span>
                    </Typography>
                </Grid>
            </Grid>
            <Grid item md={12}>
                <Calendar />
            </Grid>
        </Grid>
    )
};

const WrappedHome = () => <Dashboard content={Home} />;


export default WrappedHome;