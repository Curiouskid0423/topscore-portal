import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { connect } from "react-redux"
import {startAddNewUser} from "../../actions/auth";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
    formItemStyles: {
        marginBottom: "1rem",
    },
    formTitle: {
        paddingBottom: ".7rem",
        textTransform: "uppercase",
    }
});

const UserInfoForm = (props) => {

    const classes = useStyles();

    const [email, setEmail] = useState("");
    const handleEmail = (e) => setEmail(e.target.value);

    const [userType, setUserType] = useState("EDITOR");
    const handleUserType = (e) => setUserType(e.target.value);

    const [confirmPrompt, setConfirmPrompt] =  useState(false);
    const handlePromptClose = () => setConfirmPrompt(false);
    const handlePromptOpen = () => setConfirmPrompt(true);

    const onAddUser = (e) => {
        e.preventDefault();
        if (email !== "")  {
            handlePromptClose();
            props.dispatchAddUser({
                email, type: userType
            });
        }
    }

    return (
        <form noValidate>
            <Typography component="h2" variant="h6" gutterBottom className={classes.formTitle}>
                Add New User
            </Typography>
            <FormControl required variant="outlined" className={classes.formItemStyles}
                         size={"small"} style={{ width: "10rem" }}>
                <InputLabel>User Type</InputLabel>
                <Select labelId="course-type-label" id="course-select"
                        value={userType} onChange={handleUserType}>
                    <MenuItem value={"EDITOR"}>EDITOR</MenuItem>
                    <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                </Select>
            </FormControl>
            <TextField required className={classes.formItemStyles} id="outlined-basic" label="Email"
                       value={email} size="small" variant="outlined" fullWidth onChange={handleEmail}/>
            <Button variant="contained" className={classes.submit} onClick={handlePromptOpen}>
               Submit User
            </Button>

            {/*  Confirm add user Dialog  */}
            <Dialog open={confirmPrompt} onClose={handlePromptClose}>
                <DialogTitle id="alert-dialog-title">Confirm New User</DialogTitle>
                <DialogContent>
                    {
                        email === "" && <Alert severity={"warning"}>
                            Please fill in a valid email!
                        </Alert>
                    }
                    <DialogContentText id="alert-dialog-description">
                        Are you sure about adding { email } as { userType } role?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePromptClose} color="primary"> Cancel </Button>
                    <Button onClick={onAddUser} color="primary"> Confirm </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatchAddUser: (userObj) => dispatch(startAddNewUser(userObj)),
})

export default connect(undefined, mapDispatchToProps)(UserInfoForm);