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

const logOutHelper = () => {
    console.log("logged out / not logged in");
    store.dispatch(logout());
    renderApp();
    history.push("/");
}

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        let authorized = false;
        // 1. Fetch user db, and set `authorized` variable.
        db.ref("users_db").once("value", (snapshot) => {
            const authList = snapshot.val();
            console.log(snapshot.val());
            console.log("Allowed log in!");
            if (checkAuthorizedUser(authList, user.email)) {
                authorized = true;
            }

            // 2. Kick out if not authorized.
            if (authorized) {
                const nameInitial = user.displayName[0].toUpperCase();
                const currentUser = authList.find((authEl) => authEl.email === user.email);
                // 3. Log in after validating the identity.
                console.log("logged in");
                store.dispatch(login(user.uid, nameInitial));
                store.dispatch(storeLoginUserInfo(user.displayName, user.email, currentUser.type));
                // 4. For the first setCourse call, leave the error catch code to the action itself.
                store.dispatch(startSetCourses());
                store.dispatch(startSetStudents()).then(() => {
                    renderApp();
                    if (history.location.pathname === "/") {
                        history.push("/dashboard");
                    }
                }).catch((e) => console.log("Error message from startSetStudents:", e));
            } else {
                firebase.auth().signOut();
                logOutHelper();
                alert(`Hi ${user.displayName}, your email ${user.email} is not authorized to log in. Contact technical support if you think this is an error.`);
            }

        }).catch((e) => {
            console.log("Error in fetching authorized user list. " + e);
        });
    } else {
        logOutHelper();
    }
});