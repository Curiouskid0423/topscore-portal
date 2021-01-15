import React, {useState} from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {startUpdateMentor} from "../../../actions/content";

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

const StudentItemMentor = (props) => {
    const classes = useStyles();

    // state: testing
    const [testInfo, setTestInfo] = useState(props.content.testInfo);
    const handleTestInfo = (e) => setTestInfo(e.target.value);
    // state: college list
    const [collegeLst, setCollegeLst] = useState(props.content.collegeList);
    const handleCollegeLst = (e) => setCollegeLst(e.target.value);
    // state document reference
    const [docRef, setDocRef] = useState(props.content.optionals);
    const handleDocREf = (e) => setDocRef(e.target.value);

    // handleSubmit
    const onSubmit = () => {
        const result = {
            collegeList: collegeLst,
            testInfo: testInfo,
            optionals: docRef
        }
        props.dispatchMentor(result, props.match.params.id);
    }

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
                        <TextField label="Contents" multiline rows={5} fullWidth
                                   value={testInfo} onChange={handleTestInfo}/>
                    </AccordionDetails>
                </Accordion>
                {/* College List */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />}
                                      id="panel1a-header" className={classes.summaryStyles}>
                        <Typography className={classes.heading}>College List </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                            <TextField label="Contents" multiline rows={5} fullWidth
                            value={collegeLst} onChange={handleCollegeLst}/>
                    </AccordionDetails>
                </Accordion>
                {/* Document Reference. */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />}
                                      id="panel2a-header" className={classes.summaryStyles}>
                        <Typography className={classes.heading}>Document Reference (e.g. High School Transcript)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField label="Contents" multiline rows={5} fullWidth
                        value={docRef} onChange={handleDocREf}/>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item sm={12} className={classes.buttonGrid}>
                <Button variant={"contained"} className={classes.saveButton} onClick={onSubmit}>
                    Save
                </Button>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    content: state.content.partMentor
});

const mapDispatchToProps = (dispatch) => ({
    dispatchMentor: (mentorObj, id) => dispatch(startUpdateMentor(mentorObj, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentItemMentor));