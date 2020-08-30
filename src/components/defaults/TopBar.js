import React from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import { connect } from "react-redux";
import templateStyles from "../../styles/makeStyles/makeTemplateStyles";
import theme from "../../themes";
import {templateDrawerChange} from "../../actions/utility";
import {startLogout} from "../../actions/auth";

const useStyles = makeStyles(templateStyles);

const TopBar = (props) => {

    const classes = useStyles();
    const handleDrawerOpen = () => props.dispatchDrawer();

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
                        TopScore
                    </Typography>
                    <div className={classes.root}>
                        <Button className={classes.logOutButton} onClick={props.dispatchLogOut}>
                            Log Out
                        </Button>
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
