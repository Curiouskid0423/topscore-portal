import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";
import {submitMessage} from "../actions/utility";
import { connect } from "react-redux";

const successMessage = "Submission success!";
const errorMessage = "Submission error due to database connection failure. Please check your internet connection.";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MessageSnackbar = (props) => {

    const message = (props.submitStatus === "success")
        ? successMessage : errorMessage;

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={6000}
                open={props.submitStatus !== ""}
                key={message}
            >
                <Alert onClose={props.clearSubmit} severity="info">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    clearSubmit: () => dispatch(submitMessage(""))
})

export default connect(undefined, mapDispatchToProps)(MessageSnackbar);