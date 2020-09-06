import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {TabPanel} from "../ContentTabs";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import CustomTabPanel from "./CustomTabPanel";

const allProps = (index) => ({id: `compass-tab-${index}`,});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        height: 224
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        maxHeight: "350px"
    }
}));

const CompassForm = () => {

    const classes = useStyles();
    const [coreTab, setCoreTab] = useState(0);
    const rowNumber = 12;
    const handleChange = (event, newValue) => setCoreTab(newValue);

    return (
        <Grid container>
            <Grid item md={2} sm={3}>
                <Tabs orientation="vertical" variant="scrollable"
                      value={coreTab} onChange={handleChange} className={classes.tabs}>
                    <Tab label="Summary" {...allProps(0)} />
                    <Tab label="Improvement" {...allProps(1)} />
                    <Tab label="Goal Setting" {...allProps(2)} />
                    <Tab label="Engagement" {...allProps(3)} />
                    <Tab label="Grade & Tests" {...allProps(4)} />
                    <Tab label="Activities" {...allProps(5)} />
                    <Tab label="Achievements" {...allProps(6)} />
                    <Tab label="To-Do" {...allProps(7)} />
                </Tabs>
            </Grid>
            <Grid item md={10} sm={9}>
                <TabPanel value={coreTab} index={0}>
                    <CustomTabPanel label={"Summary"} />
                </TabPanel>
                <TabPanel value={coreTab} index={1}>
                    <CustomTabPanel label={"Need Improvement"} />
                </TabPanel>
                <TabPanel value={coreTab} index={2}>
                    <CustomTabPanel label={"Goal Setting"} />
                </TabPanel>
                <TabPanel value={coreTab} index={3}>
                    <CustomTabPanel label={"Engagement"} />
                </TabPanel>
                <TabPanel value={coreTab} index={4}>
                    <CustomTabPanel label={"Grades & Tests"} />
                </TabPanel>
                <TabPanel value={coreTab} index={5}>
                    <CustomTabPanel label={"Activities"} />
                </TabPanel>
                <TabPanel value={coreTab} index={6}>
                    <CustomTabPanel label={"Achievements"} />
                </TabPanel>
                <TabPanel value={coreTab} index={7}>
                    <CustomTabPanel label={"To-Do Lists"} />
                </TabPanel>
            </Grid>
        </Grid>
    )
}

export default CompassForm;