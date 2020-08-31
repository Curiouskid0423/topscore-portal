import React, {useState} from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import { connect } from "react-redux";
import templateStyles from "../../styles/makeStyles/makeTemplateStyles";
import theme from "../../themes";
import {templateDrawerChange} from "../../actions/utility";
import {startLogout} from "../../actions/auth";
import {Link} from "react-router-dom";

const useStyles = makeStyles(templateStyles);

const TopBar = (props) => {

    const classes = useStyles();
    const [dialogOpen, setDialogChange] = useState(false);
    const handleDrawerOpen = () => props.dispatchDrawer();
    const handleDialogChange = () => setDialogChange(!dialogOpen);

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="absolute"
                    className={clsx(classes.appBar, props.drawerOpen && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, props.drawerOpen && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        <Link to={"/"} className={classes.logoStyles}>
                        TopScore Education
                        </Link>
                    </Typography>
                    <div className={classes.root}>
                        <Button className={classes.logOutButton} onClick={handleDialogChange}>
                            Log Out
                        </Button>
                        {/* Alert Dialog */}
                        <Dialog open={dialogOpen} onClose={handleDialogChange}>
                            <DialogTitle id="alert-dialog-title">Sure about Logging Out ?</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Logging out with any unsaved changes may be not recoverable.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialogChange} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={props.dispatchLogOut} color="primary" autoFocus>
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <Avatar className = {"header__avatar"}> {props.nameInitial} </Avatar>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchDrawer: () => dispatch(templateDrawerChange()),
    dispatchLogOut: () => dispatch(startLogout())
});

// `drawerOpen` is left undefined intentionally. If you want
//  to toggle the AppBar to shrink, pass in `state.util.templateDrawerOpen`
const mapStatesToProps = (state) => ({
    drawerOpen: undefined,
    nameInitial: state.auth.nameInitial,
});

export default connect(mapStatesToProps, mapDispatchToProps)(TopBar);
