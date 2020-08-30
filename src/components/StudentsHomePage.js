import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Dashboard from "./defaults/Templates";
import Grid from "@material-ui/core/Grid";
import StudentItem from "./Students/StudentItem";
import Query from "./Students/Query";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    queryStyles: {
        paddingLeft: "1.2rem"
    }
}));

/**
 * Loader for Student Items
 * @param students
 * @return a Loader Helper React Component.
 */
const StudentLoader = ({ students } = {}) => {
    return students.map(
        (item) => (<Grid item lg={4} md={6} sm={12} key = {item.id} >
            <StudentItem {...item.contact}/>
        </Grid>)
    );
}

const StudentHome = (props) => {

    const classes = useStyles();

    return (
        <Grid container>
            {/*Query Section*/}
            <Grid item container sm={12} spacing={1} className={classes.queryStyles}>
                <Query/>
            </Grid>
            {/*Student results*/}
            <Grid item container sm={12}>
                <StudentLoader students = {props.students}/>
            </Grid>
        </Grid>
    )
};

const mapStatesToProps = (states) => ({
    students: states.students,
});

const WrappedStudentHome = () => {
    return (
        <Dashboard content={connect(mapStatesToProps)(StudentHome)} />
    );
}


export default WrappedStudentHome;