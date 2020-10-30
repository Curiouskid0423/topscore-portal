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
    reportCardContainer: {
        display: "flex",
    },
    reportCardItemContainer: {
        margin: ".75rem .75rem 0 0",
        width: "220px",
        height: "200px",
    },
    addNewButton: {
        // margin top is 20% of the report card item
        margin: "40px 1rem 0 0",
        width: "135px",
        height: "130px",
        "&:hover": {
            transition: "ease-in-out .3s",
            transform: "scale(1.05)",
            cursor: "pointer",
        }
    },
    addNewButtonContainer: {
        alignItems: "center",
        background: "#ead8af",
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
        flexDirection: "column",
        height: "100%",
    },
    btnTitle: {
        fontFamily: "\'Commissioner\', sans-serif",
        fontWeight: 600,
        fontSize: ".8rem",
        marginTop: "1rem",
        color: "#fff",
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
               <Grid item sm={12} className={classes.reportCardContainer}>
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
                   <Card className={classes.addNewButton} style={{ borderRadius: "5px" }}>
                       {/* Should iterate over the card items. with map. */}
                       <CardContent className={classes.addNewButtonContainer}>
                           <img src={"/images/doc-icon-2.png"} alt={"add button"} style={{ width: "2.5rem", }} />
                           <Typography variant={"h5"} component={"h2"} class={classes.btnTitle}>
                               ADD REPORT
                           </Typography>
                       </CardContent>
                   </Card>
               </Grid>
           </ThemeProvider>
        </Grid>
    );
}

export default StudentItemReport;