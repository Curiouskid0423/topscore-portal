import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../themes";
import TabLoader from "./TabLoader";

const useStyles = makeStyles({

});

const StudentItemReport = (props) => {

    const classes = useStyles();

    //Opened Tab 0 for TOEFL, 1 for SAT (2 for SAT Subject in the future)
    const [openTab, setOpenTab] = useState(0);

    return (
        <Grid container>
           <ThemeProvider theme={theme}>
               <Grid item sm={12}>
                   <ButtonGroup variant={"contained"}>
                       <Button color={!openTab && "primary"}
                               onClick={() => setOpenTab(0)}> TOEFL </Button>
                       <Button color={!!openTab && "primary"}
                               onClick={() => setOpenTab(1)}> SAT </Button>
                   </ButtonGroup>
               </Grid>
               <Grid item sm={12}>
                   <TabLoader title={ (openTab === 0)? "TOEFL" : "SAT"} studentID={props.studentID}/>
               </Grid>
           </ThemeProvider>
        </Grid>
    );
}

export default StudentItemReport;