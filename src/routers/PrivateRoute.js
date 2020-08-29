import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Templates from "../components/Templates";

export const PrivateRoute = (
    { isAuthenticated, component: Component, ...rest}
    ) => {
    if (isAuthenticated) {
        return (<div>
            <Templates />
            <Route {...rest} component = {Component} />
        </div>);
    } else {
        return <Redirect to = "/" />
    }
}

const mapStateToProps = (state) => ({
   isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);