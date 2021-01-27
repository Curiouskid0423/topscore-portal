import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

/**
 * Header should contain title and breadcrumbs
 */

const useStyles = makeStyles({
    root: {
        margin: ".5rem 0 2rem .8rem",
        "& h2": {
            fontWeight: 600,
            letterSpacing: "1px"
        }
    }
})

const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography component="h2" variant="h4" gutterBottom style={{ fontFamily: "\'Commissioner\', sans-serif", }}>
                {props.title}
            </Typography>
        </div>
    );
}

export default Header;