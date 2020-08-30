import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import templateStyles from "../../styles/makeStyles/makeTemplateStyles";
import TopBar from "./TopBar";
import LeftDrawer from "./LeftDrawer";
import Home from "../Home/Home";

const useStyles = makeStyles(templateStyles);

const Dashboard = ({ content: Content = Home}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* Top Nav Bar */}
            <TopBar />
            {/* Left Side Drawer */}
            <LeftDrawer />
            {/* Main Content */}
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Content />
                </Container>
            </main>
        </div>
    );
}

export default Dashboard;