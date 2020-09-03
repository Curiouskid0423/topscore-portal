import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    boxContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100px",
        height: "100px"
    }
});

const CompassBox = ({ classes } = {}) => (
   <Button></Button>
)

const compassHome = () => {

    const classes = useStyles();

    return (
        <div>
            <CompassBox classes={classes}/>
        </div>
    )
}

export default compassHome;