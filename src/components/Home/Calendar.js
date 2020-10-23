import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";

const useStyles = makeStyles({
    calStyles: {
        width: "100%",
        height: "40rem",
        boxShadow: "10px 33px 75px -20px rgba(0,0,0,0.75)",
        border: "1px solid #fff",
        padding: "1.2rem"
    }
});

const Calendar = (props) => {
    const classes = useStyles();
    return (
        <Container>
            <iframe className={classes.calStyles}
                    src={`https://calendar.google.com/calendar/embed?src=${props.loginEmail}`}>
            </iframe>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    loginName: state.util.loginName,
    loginEmail: state.util.loginEmail
});

export default connect(mapStateToProps)(Calendar);