import React, {useEffect} from "react";
import { connect } from "react-redux";
import getVisibleStudents from "../../selectors/getVisibleStudents";
import Dashboard from "../defaults/Templates";
import { Alert } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import StudentItem from "./StudentItem";
import Query from "./Query";
import {makeStyles} from "@material-ui/core/styles";
import MessageSnackbar from "../MessageSnackbar";
import Header from "../defaults/Header";

const useStyles = makeStyles((theme) => ({
    queryStyles: {
        paddingLeft: "1.2rem",
    },
    queryContainer: {
        background: "#F3DFAF45",
        border: ".1px solid #7c7c7c1f",
        borderRadius: ".5rem",
        boxShadow: "0px 10px 30px -4px rgba(0,0,0,0.1)",
        maxWidth: "95%",
        margin: "auto",
        marginBottom: "1rem",
        padding: "20px",
    }
}));

/**
 * Loader for Student Items
 * @param props: react properties
 * @return a Loader Helper React Component.
 */
const StudentLoader = (props) => {
    return props.students.map(
        (item) => (<Grid item lg={4} md={6} sm={12} key = {item.id} >
            <StudentItem {...item.contact} id={item.id}/>
        </Grid>)
    );
}

const StudentHome = (props) => {
    const classes = useStyles();
    return (
        <Grid container>
            {/* Snackbar */}
            { (props.submitStatus !== "") && <MessageSnackbar submitStatus={props.submitStatus} />}

            <Grid item sm={12} className={classes.queryContainer}>
                {/* Header */}
                <Header title={"STUDENT DIRECTORY"}/>
                {/* Query Section */}
                <Grid item container sm={12} spacing={1} className={classes.queryStyles}>
                    <Query/>
                </Grid>
            </Grid>
            {/*Student results*/}
            <Grid container item sm={12}>
                <StudentLoader {...props} students = {props.students}/>
            </Grid>
        </Grid>
    )
};

const mapStatesToProps = (state) => ({
    students: getVisibleStudents(state.students, state.filters.visibleStudents),
    submitStatus: state.util.submitStatus || ""
});

const WrappedStudentHome = () => {
    return (
        <Dashboard content={connect(mapStatesToProps)(StudentHome)} />
    );
}


export default WrappedStudentHome;