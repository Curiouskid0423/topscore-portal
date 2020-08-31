import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dashboard from "../defaults/Templates";
import SettingsMenu from "./SettingsMenu";
import { Switch, useRouteMatch } from "react-router-dom";
import PrivateRoute from "../../routers/PrivateRoute";
import NotFound from "../404Page";
import AddStudent from "./AddStudent";
import UpdateAccount from "./UpdateAccount";
import ManageUsers from "./ManageUsers";

const useStyles = makeStyles({
    root: {
        marginTop: "1rem"
    }
})

const Settings = () => {

    const classes = useStyles();
    const { path } = useRouteMatch();

    return (
        <Grid container className={classes.root}>
            <Grid item sm={2}>
                <SettingsMenu />
            </Grid>
            {/* Subpage Routing */}
            <Grid item container sm={10}>
                <Switch>
                    <PrivateRoute path={`${path}/addStudent`} component={AddStudent} />
                    <PrivateRoute path={`${path}/updateAccount`} component={UpdateAccount} />
                    <PrivateRoute path={`${path}/manageUsers`} component={ManageUsers} />
                </Switch>
            </Grid>
        </Grid>
    )
};

const WrappedSettings = () => <Dashboard content={Settings} />;


export default WrappedSettings;