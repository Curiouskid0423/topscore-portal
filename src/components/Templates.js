import React from 'react';
import clsx from 'clsx';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
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
import {startLogout} from "../actions/auth";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    horizontalLogo: {
        maxWidth: "10rem"
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    logOutButton: {
        color: "white",
        marginRight: "1rem",
    }
}));

const Dashboard = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
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
                            <Button
                                className={classes.logOutButton}
                                onClick={props.dispatchLogOut}
                            >
                                Log Out
                            </Button>
                            <Avatar className = {"header__avatar"}> {props.nameInitial} </Avatar>
                        </div>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
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
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container className={"content-container"} spacing={2}>
                        <Grid item sm={1}>&nbsp;</Grid>
                        <Grid item sm={10}>
                            While MongoDB emerged as part of the wave of so-called “NoSQL” databases, MongoDB and Firebase are both
                            more similar to their relational forebearers than most of the more single-purpose NoSQL solutions.
                            MongoDB, for instance, supports ACID transactions, schema validation, and even cross-collection joins, and
                            is intended to handle similar workloads to those that were traditionally the domain of relational databases
                            like Oracle or MySQL, while bringing the scale-first architecture and structural flexibility that typifies
                            NoSQL solutions. MongoDB, for instance, supports ACID transactions, schema validation, and even
                            cross-collection joins, and is intended to handle similar workloads to those that were traditionally the
                            domain of relational databases like Oracle or MySQL, while bringing the scale-first architecture and
                            structural flexibility that typifies NoSQL solutions.
                            MongoDB, for instance, supports ACID transactions, schema validation, and even cross-collection joins, and
                            is intended to handle similar workloads to those that were traditionally the domain of relational databases
                            like Oracle or MySQL, while bringing the scale-first architecture and structural flexibility that typifies
                            NoSQL solutions.
                        </Grid>
                        <Grid item sm={1}>&nbsp;</Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}

export default Dashboard;