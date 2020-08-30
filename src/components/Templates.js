import React from 'react';
import clsx from 'clsx';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';
import theme from "../themes";
import {paragraphFiller} from "../fixtures";
import {startLogout} from "../actions/auth";
import templateStyles from "../styles/makeStyles/makeTemplateStyles";

const useStyles = makeStyles(templateStyles);

const Dashboard = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);


    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* Top Nav Bar */}
            <ThemeProvider theme={theme}>
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            TopScore
                        </Typography>
                        <div className={classes.root}>
                            <Button className={classes.logOutButton}
                                    onClick={props.dispatchLogOut}
                            >
                                Log Out
                            </Button>
                            <Avatar className = {"header__avatar"}> {props.nameInitial} </Avatar>
                        </div>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            {/* Left Side Drawer */}
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
            </Drawer>
            {/* Main Content */}
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container className={"content-container"} spacing={2}>
                        <Grid item sm={1}>&nbsp;</Grid>
                        <Grid item sm={10}>
                           <Typography component={"p"}>
                               { paragraphFiller }
                           </Typography>
                        </Grid>
                        <Grid item sm={1}>&nbsp;</Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}

const mapStateToProps = (state) => ({
    nameInitial: state.auth.nameInitial
})
const mapDispatchToProps = (dispatch) => ({
    dispatchLogOut: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);