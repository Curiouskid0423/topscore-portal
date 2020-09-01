import React from "react";
import Dashboard from "../defaults/Templates";
import {Switch, Link, useRouteMatch} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import PrivateRoute from "../../routers/PrivateRoute";
import CourseList from "./CourseList";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCourse from "./AddCourse";
import Header from "../defaults/Header";
import NotFound from "../404Page";

const useStyles = makeStyles({
    root: {
        marginTop: "1rem"
    },
})

const Courses = () => {

    const classes = useStyles();
    const { path } = useRouteMatch();

    return (
        <Grid container className={classes.root}>
            {/* Subpage Routing */}
            <Grid item container sm={12}>
                <Switch>
                    <PrivateRoute path={`${path}`} exact component={CourseList}/>
                    <PrivateRoute path={`${path}/addCourse`} component={AddCourse}/>
                    {/*<PrivateRoute path={`${path}/editCourse`}/>*/}
                    <PrivateRoute component={NotFound}/>
                </Switch>
            </Grid>
        </Grid>
    )
};

const WrappedCourses = () => <Dashboard content={Courses} />;


export default WrappedCourses;