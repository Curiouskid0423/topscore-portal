import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";
import {startUpdateCompass} from "../../../actions/content";
import { connect } from "react-redux";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../PDFProcessing/PdfModal";
const useStyles = makeStyles({
    flexContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    buttonGroup: {
      display: "flex",
      "& button": {
          margin: ".5rem"
      }
    },
    saveButton: {
        background: "#DCD3C0",
        padding: ".5rem 3.5rem",
    },
    textStyles: {
        width: "100%",
        marginBottom: "1rem",
    },
    pdfModalStyles: {},
})

const CustomTabPanel = (props) => {

    const currStudent = props.currentStudent(props.match.params.id);

    const rowNumber = 12;
    const classes = useStyles();
    // Value state of this component.
    const [currentVal, setCurrent] = useState(props.value);
    const handleCurrentVal = (e) => setCurrent(e.target.value);

    // PDF display modal toggle
    const [displayPdf, setdisplayPdf] = useState(false);
    const handlePdfClose = () => setdisplayPdf(false);
    const handlePdfOpen = () => setdisplayPdf(true);

    const handleSubmit = () => {
        props.dispatchCompass(currentVal, props.match.params.id, props.id);
    }

    return (
        <div className={classes.flexContainer}>
            <Paper elevation={3} className={classes.textStyles}>
                <TextField id="compass-multiline-input" label={props.label} value={currentVal}
                           onChange={handleCurrentVal} multiline rows={rowNumber} variant="outlined" fullWidth/>
            </Paper>
            <div className={classes.buttonGroup}>
                <Button className={classes.saveButton} onClick={handleSubmit}> Save </Button>
                <Button className={classes.saveButton} onClick={handlePdfOpen}> Export All to PDF </Button>
            </div>

            {/* Alert Dialog */}
            <Dialog open={displayPdf} onClose={handlePdfClose}
                    className={classes.pdfModalStyles} maxWidth={"md"} fullWidth={true}>
                <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
                    Current Mentor Report View
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <PDFViewer width="100%" height="700px">
                            <MyDocument compassContent={props.compassContent}
                                        student={currStudent}/>
                        </PDFViewer>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePdfClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Alert Dialog END*/}

        </div>
    )
}

const mapStateToProps = (state) => ({
    compassContent: state.content.partCompass,
    currentStudent: (id) => state.students.find(element => element.id === id)
});

const mapDispatchToProps = (dispatch) => ({
    dispatchCompass: (compassObj, id, command) => dispatch(startUpdateCompass(compassObj, id, command))
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomTabPanel));