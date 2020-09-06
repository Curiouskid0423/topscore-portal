import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {TabPanel} from "../ContentTabs";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

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
        maxHeight: "300px"
    },
    textStyles: {
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
                    <Paper elevation={3} className={classes.textStyles}>
                        <TextField id="compass-multiline-input" label="Summary"
                                   multiline rows={rowNumber} variant="outlined" fullWidth/>
                    </Paper>
                </TabPanel>
                <TabPanel value={coreTab} index={1}>
                    <Paper elevation={3} className={classes.textStyles}>
                        <TextField id="compass-multiline-input" label="Need Improvement"
                                   multiline rows={rowNumber} variant="outlined" fullWidth/>
                    </Paper>
                </TabPanel>
                <TabPanel value={coreTab} index={2}>
                    <Paper elevation={3} className={classes.textStyles}>
                        <TextField id="compass-multiline-input" label="Goal Setting"
                                   multiline rows={rowNumber} variant="outlined" fullWidth/>
                    </Paper>
                </TabPanel>
                <TabPanel value={coreTab} index={3}>
                    <Paper elevation={3} className={classes.textStyles}>
                        <TextField id="compass-multiline-input" label="Engagement"
                                   multiline rows={rowNumber} variant="outlined" fullWidth/>
                    </Paper>
                </TabPanel>
                <TabPanel value={coreTab} index={4}>
                    <Paper elevation={3} className={classes.textStyles}>
                        <TextField id="compass-multiline-input" label="Grade & Tests"
                                   multiline rows={rowNumber} variant="outlined" fullWidth/>
                    </Paper>
                </TabPanel>
                <TabPanel value={coreTab} index={5}>
                    <Paper elevation={3} className={classes.textStyles}>
                        <TextField id="compass-multiline-input" label="Activities"
                                   multiline rows={rowNumber} variant="outlined" fullWidth/>
                    </Paper>
                </TabPanel>
                <TabPanel value={coreTab} index={6}>
                    <Paper elevation={3} className={classes.textStyles}>
                        <TextField id="compass-multiline-input" label="Achievements"
                                   multiline rows={rowNumber} variant="outlined" fullWidth/>
                    </Paper>
                </TabPanel>
                <TabPanel value={coreTab} index={7}>
                    <Paper elevation={3} className={classes.textStyles}>
                        <TextField id="compass-multiline-input" label="To-Do List"
                                   multiline rows={rowNumber} variant="outlined" fullWidth/>
                    </Paper>
                </TabPanel>
            </Grid>
        </Grid>
    )
}

export default CompassForm;