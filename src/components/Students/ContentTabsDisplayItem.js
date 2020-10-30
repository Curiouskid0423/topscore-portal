import React, {useState} from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes";
import StudentItemOverview from "./StudentItemOverview";
import StudentItemCore from "./Core/StudentItemCore";
import StudentItemCompass from "./StudentItemCompass";
import StudentItemMentor from "./Mentor/StudentItemMentor";
import StudentItemReport from "./Report/StudentItemReport";
import MessageSnackbar from "../MessageSnackbar";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: theme.spacing(2),
        padding: "0 2.5rem",
    },
});

export const TabPanel = ({ children, value, index, ...rest } = {}) => {
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

const allProps = (index) => ({ id: `student-tab-${index}` });

const ContentTabsDisplayItem = (props) => {

    const classes = useStyles();

    // State to handle the value of what tab to choose
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <ThemeProvider theme={theme}>
            { (props.submitStatus !== "") && <MessageSnackbar submitStatus={props.submitStatus} />}
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
                    <StudentItemCore studentID={props.studentID}/>
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

export default ContentTabsDisplayItem;