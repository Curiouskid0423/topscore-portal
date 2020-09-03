import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StudentItemOverview from "./StudentItemOverview";
import StudentItemCore from "./StudentItemCore";
import StudentItemCompass from "./StudentItemCompass";
import StudentItemMentor from "./StudentItemMentor";
import StudentItemReport from "./StudentItemReport";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes";
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: theme.spacing(2),
    },
});

const TabPanel = ({ children, value, index, ...rest } = {}) => {
    return (
        <div role={"tabpanel"} hidden={value !== index}
             id={`student-tab-${index}`} {...rest}>
            {value === index && (
                <Box p={3}>
                    { children }
                </Box>
            )}
        </div>
    )
}

const allProps = (index) => {
    return {
        id: `student-tab-${index}`,
    }
}

const ContentTabs = () => {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} centered variant={"fullWidth"}>
                        <Tab label="Overview" {...allProps(0)} />
                        <Tab label="Core" {...allProps(1)} />
                        <Tab label="Compass" {...allProps(2)} />
                        <Tab label="Mentor" {...allProps(3)} />
                        <Tab label="Report Card" {...allProps(4)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <StudentItemOverview />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <StudentItemCore />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <StudentItemCompass />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <StudentItemMentor />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <StudentItemReport />
                </TabPanel>
            </div>
        </ThemeProvider>
    );
}

export default ContentTabs;