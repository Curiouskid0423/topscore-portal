/**
 * An app.js file that bootstraps the app.
 * @author Kevin Li
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import 'react-dates/lib/css/_datepicker.css';
import Router, {history} from "./routers/AppRouter";
import "./styles/styles.scss";
import { firebase } from "./firebase/firebase";
import configStore from "./store/configStore";
import LoadingPage from "./components/LoadingPage";
import {login, logout} from "./actions/auth";
import Templates from "./components/Templates";

/* Redux store object. */
const store = configStore();
const storage = (
    <Provider store = {store}>
        <Router />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(storage, document.getElementById("app"));
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("logged in");
        const nameInitial = user.displayName[0].toUpperCase();
        store.dispatch(login(user.uid, nameInitial));
        renderApp();
        if (history.location.pathname === "/") {
            history.push("/dashboard");
        }
    } else {
        console.log("logged out");
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});