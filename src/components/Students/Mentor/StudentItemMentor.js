import React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    summaryStyles: {
        background: "#787878",
        color: "#fff"
    },
    buttonGrid: {
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem"
    },
    saveButton: {
        padding: ".5rem 3.5rem",
        background: "#DCD3C0"
    }
}));

const StudentItemMentor = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item md={12}>
                {/* Testing */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />}
                                      id="panel1a-header" className={classes.summaryStyles}>
                        <Typography className={classes.heading}>Testing </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField label="Contents" multiline rows={5} fullWidth/>
                    </AccordionDetails>
                </Accordion>
                {/* College List */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />}
                                      id="panel1a-header" className={classes.summaryStyles}>
                        <Typography className={classes.heading}>College List </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                            <TextField label="Contents" multiline rows={5} fullWidth/>
                    </AccordionDetails>
                </Accordion>
                {/* Document Reference. */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />}
                                      id="panel2a-header" className={classes.summaryStyles}>
                        <Typography className={classes.heading}>Document Reference</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField label="Contents" multiline rows={5} fullWidth/>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item sm={12} className={classes.buttonGrid}>
                <Button variant={"contained"} className={classes.saveButton}> Save </Button>
            </Grid>
        </Grid>
    );
}

export default StudentItemMentor;