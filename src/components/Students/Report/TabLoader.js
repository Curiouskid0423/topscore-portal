import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import ReportForm from "./ReportForm";
import {startAddReport, startEditReport} from "../../../actions/content";
import makeTabLoaderStyles from "../../../styles/makeStyles/makeTabLoaderStyles";

const useStyles = makeStyles(makeTabLoaderStyles);

const TabLoader = (props) => {

    const classes = useStyles();
    const reportList = (props.title === "TOEFL")
        ? props.reportCards.TOEFLreport : props.reportCards.SATreport;

    const [currentReport, setCurrentReport] = useState("");

    const [displayForm, setDisplayForm] = useState(false);
    const handleFormOpen = (reportObj) => {
        setDisplayForm(true);
        setCurrentReport(reportObj || "");
    }
    const handleFormClose = () => {
        setDisplayForm(false);
        setCurrentReport("");
    }

    const handleSubmit = (reportObj) => {
        if (currentReport === "") {
            // Add report submit
            props.dispatchAddReport(props.studentID, reportObj);
            setDisplayForm(false);
        } else {
            // Edit report submit
            props.dispatchEditReport(props.studentID, {
                id: currentReport.id,
                ...reportObj
            });
            setDisplayForm(false);
        }
    }

    const completeList = Object.values(reportList || []).filter((el) => el.title !== "PLACEHOLDER");

    return (
        <div className={classes.reportCardContainer}>
            {
                completeList.map((el) => (
                    <Card key={el.id} className={classes.reportCardItemContainer}>
                        {/* Should iterate over the card items. with map. */}
                        <CardContent>
                            <hr className={classes.topLineDecoration}/>
                            <a href={el.sourceLink} target={"_blank"}
                               className={classes.reportCardItemLink}>
                                <Typography variant={"h6"} component={"h6"}>
                                    { el.title }
                                </Typography>
                                <Typography className={classes.timestamp} color="textSecondary">
                                    Saved on { moment(el.testDate).format('MMM Do YYYY') }
                                </Typography>
                            </a>
                            <Button size={"small"} variant={"outlined"}
                                    onClick={() => handleFormOpen(el)} style={{ marginTop: ".5rem" }}>
                                Edit
                            </Button>
                        </CardContent>
                    </Card>
                ))
            }
            {/* Add button here */}
            <Card className={classes.reportCardItemContainer} style={{ borderRadius: "5px" }}>
                {/* Should iterate over the card items. with map. */}
                <CardContent className={classes.addNewButtonContainer} onClick={() => handleFormOpen()}>
                    <img src={"/images/doc-icon-2.png"} alt={"add button"} style={{ width: "4.2rem"}} />
                    <hr className={classes.addNewButtonDivider}/>
                    <Typography variant={"h5"} component={"h2"} className={classes.btnTitle}>
                        ADD REPORT
                    </Typography>
                </CardContent>
            </Card>
            {/*  Dialog to display report edit or add. Only open when state change.  */}
            <Dialog open={displayForm} onClose={handleFormClose}>
                <DialogTitle id="alert-dialog-title">Edit Report</DialogTitle>
                <DialogContent style={{ padding: "8px 0" }}>
                    <ReportForm target={currentReport} isEdit={!!currentReport}
                                defaultAdd={props.title} onSubmit={handleSubmit}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFormClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapStateToProps = (state) => ({
    reportCards: state.content.partReport,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddReport: (studentID, reportObj) => dispatch(startAddReport(studentID, reportObj)),
    dispatchEditReport: (studentID, reportObj) => dispatch(startEditReport(studentID, reportObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabLoader);
