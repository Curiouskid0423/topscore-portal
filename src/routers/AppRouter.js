/**
 * Router Components
 * @author Kevin Li
 */
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Dashboard from "../components/Templates";
import NotFound from "../components/404Page";
import SignInPage from "../components/SignInPage";


export const history = createBrowserHistory();

// Browser routers takes only one component child (e.g. one div, or one Switch)
const AppRouter = () => (
    <Router history = {history}>
        <div>
            <Switch>
                <PublicRoute path = "/" component = {SignInPage} exact = {true} />
                <PrivateRoute path = "/dashboard" component = {Dashboard}/>
                <Route component = {NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;