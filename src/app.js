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
import {db, firebase} from "./firebase/firebase";
import configStore from "./store/configStore";
import LoadingPage from "./components/LoadingPage";
import {login, logout} from "./actions/auth";
// Two firebase call that are necessary at the beginning.
import {startSetStudents} from "./actions/students";
import {startSetCourses} from "./actions/courses";
import {storeLoginUserInfo} from "./actions/utility";
import {checkAuthorizedUser} from "./selectors/checkAuthorizedUser";

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
        // 1. fetch user db.
        db.ref("users_db").once("value", (snapshot) => {
            console.log(snapshot.val());
            const authList = snapshot.val();
            // 2. if user is allowed.
            const nameInitial = user.displayName[0].toUpperCase();
            if (!checkAuthorizedUser(authList, user.email)) {
                alert(`Hi ${user.displayName}, your email ${user.email} is not authorized to log in. Contact technical support if you think this is an error.`);
                return renderApp();
            }
            // 3. Log in after validating the identity.
            console.log("logged in");
            store.dispatch(login(user.uid, nameInitial));
            store.dispatch(storeLoginUserInfo(user.displayName, user.email));

            // For the first setCourse call, leave the error catch code to the action itself.
            store.dispatch(startSetCourses());
            store.dispatch(startSetStudents()).then(() => {
                renderApp();
                if (history.location.pathname === "/") {
                    history.push("/dashboard");
                }
            }).catch((e) => console.log("Error message from startSetStudents:", e));
        }).catch((e) => {
            console.log("Error in fetching authorized user list. " + e);
        });
    } else {
        console.log("logged out");
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});