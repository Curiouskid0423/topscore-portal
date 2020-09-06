import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../themes";

const useStyles = makeStyles({
    timestamp: {
        fontSize: 14,
    },
   reportCardItemContainer: {
        margin: "1rem .5rem .5rem 0",
        width: "220px",
        height: "200px",
   }
});

const StudentItemReport = () => {

    const classes = useStyles();

    //Opened Tab 0 for TOEFL, 1 for SAT, 2 for SAT Subject
    const [openTab, setOpenTab] = useState(0);

    return (
        <Grid container>
           <ThemeProvider theme={theme}>
               <Grid item sm={12}>
                   <ButtonGroup variant={"contained"}>
                       <Button color={"primary"}>TOEFL</Button>
                       <Button>SAT</Button>
                   </ButtonGroup>
               </Grid>
               <Grid item sm={12}>
                   <Card className={classes.reportCardItemContainer}>
                       {/* Should iterate over the card items. with map. */}
                       <CardContent>
                           <Typography variant={"subtitle1"} color="textSecondary" gutterBottom>
                               Spring 2020
                           </Typography>
                           <Typography variant={"h5"} component={"h2"}>
                               Class Title
                           </Typography>
                           <Typography className={classes.timestamp} color="textSecondary">
                               Edited on Sep 6th 2020
                           </Typography>
                       </CardContent>
                   </Card>
               </Grid>
           </ThemeProvider>
        </Grid>
    );
}

export default StudentItemReport;