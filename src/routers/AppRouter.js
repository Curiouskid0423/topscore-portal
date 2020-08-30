/**
 * Router Components
 * @author Kevin Li
 */
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "../components/Home/Home";
import NotFound from "../components/404Page";
import SignInPage from "../components/SignInPage";
import StudentHome from "../components/StudentsHomePage";
import Settings from "../components/Settings";
import Users from "../components/Users/Users";


export const history = createBrowserHistory();

// Browser routers takes only one component child (e.g. one div, or one Switch)
const AppRouter = () => (
    <Router history = {history}>
        <div>
            <Switch>
                <PublicRoute path = "/" component = {SignInPage} exact = {true} />
                <PrivateRoute path = "/dashboard" component = {Home}/>
                <PrivateRoute path = "/users" component = {Users}/>
                <PrivateRoute path = "/settings" component = {Settings}/>
                <PrivateRoute path = "/students" component = {StudentHome}/>
                <Route component = {NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;