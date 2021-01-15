import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        display: "flex",
        flexDirection: "column"
    },
}));

const LoadingPage = () => {
    const classes = useStyles();
    return (
        <div className={"loader-object"} style={{backgroundImage: "url(\"images/loader-bg.png\")", backgroundSize: "cover",}}>
            <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress color="inherit" />
                <Typography variant={"h5"} style={{ marginTop: "5rem"}}>
                    Loading database...
                </Typography>
            </Backdrop>
        </div>
    )
};

export default LoadingPage;