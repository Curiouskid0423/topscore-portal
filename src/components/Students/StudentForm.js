import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        padding: "2rem",
        maxHeight: "550px",
        overflowY: "scroll"
    },
    addBox: {
        marginTop: "1rem"
    },
    categoryTitle: {
        marginLeft: ".5rem"
    },
    titleStyles: {
        paddingTop: "1rem",
        paddingLeft: "2.5rem",
        textTransform: "uppercase",
        color: "#5B3330"
    },
    textFieldStyles: {
        margin: "1rem .5rem"
    },
    submit: {
        margin: "1rem .5rem",
    },
}));

const StudentForm = (props) => {
    const classes = useStyles();

    // (State 1) Student ID
    const [sid, setSID] = useState("");
    const handleSID = (e) => setSID(e.target.value);
    // (State 2) First Name
    const [first, setFirst] = useState("");
    const handleFirst = (e) => setFirst(e.target.value);
    // (State 3) Last Name
    const [last, setLast] = useState("");
    const handleLast = (e) => setLast(e.target.value);
    // (State 4) Phone
    const [phone, setPhone] = useState("");
    const handlePhone = (e) => setPhone(e.target.value);
    // (State 5) Email
    const [email, setEmail] = useState("");
    const handleEmail = (e) => setEmail(e.target.value);
    // (State 6) High School
    const [highSchool, setHighSchool] = useState("");
    const handleHighSchool = (e) => setHighSchool(e.target.value);
    // (State 7) Graduation Year
    const [gradYear, setGradYear] = useState("");
    const handleGradYear = (e) => setGradYear(e.target.value);
    // (State 8) Attended College
    const [college, setCollege] = useState("");
    const handleCollege = (e) => setCollege(e.target.value);
    // (State 9) Family: Parent Name
    const [parent, setParent] = useState("");
    const handleParent = (e) => setParent(e.target.value);
    // (State 10) Family: Relationship
    const [relation, setRelation] = useState("");
    const handleRelation = (e) => setRelation(e.target.value);
    // (State 11) Family: Phone
    const [parentPhone, setParentPhone] = useState("");
    const handleParentPhone = (e) => setParentPhone(e.target.value);
    // (State 12) Family: Parent Email
    const [parentEmail, setParentEmail] = useState("");
    const handleParentEmail = (e) => setParentEmail(e.target.value);
    // (State 13) Other: Package
    const [studentPkg, setPackage] = useState("");
    const handlePackage = (e) => setPackage(e.target.value);
    // (State 14) Other: Recommendation
    const [rec, setRec] = useState("");
    const handleRecPerson = (e) => setRec(e.target.value);
    // (State 15) Other: Record of First Appointment
    const [firstAppt, setFirstAppt] = useState("");
    const handleFirstAppt = (e) => setFirstAppt(e.target.value);
    // (State 16) Other: High School Transcript
    const [transcript, setTranscript] = useState("");
    const handleTranscript = (e) => setTranscript(e.target.value);
    // (State 17) Other: List of Colleges Applied To
    const [collegeList, setCollegeList] = useState("");
    const handleCollegeList = (e) => setCollegeList(e.target.value);
    // (State 18) Other: Supervisor
    const [supervisor, setSupervisor] = useState("");
    const handleSupervisor = (e) => setSupervisor(e.target.value);
    // Error handling state
    const [error, setError] = useState("");
    const handleError = (e) => setError(e);

    // Check if all required columns are filled.
    const checkRequired = () => {
        let allFilled = true;
        const requiredColumns = [sid, first, last, phone, email,
            highSchool, gradYear, parent, relation, parentPhone];
        requiredColumns.forEach((el) => {
            if (el === "") {
                allFilled = false;
            }
        });
        return allFilled;
    }

    const onStudentSubmit = (e) => {
        e.preventDefault();
        if (!checkRequired()) {
            return handleError("Please fill out all required columns");
        }
        else {
            const studentObj = {
                supervisor: supervisor,
                contact: {
                    studentID: sid,
                    firstName: first,
                    lastName: last,
                    graduationYear: gradYear,
                    attendedCollege: college,
                    family: {
                        parent: parent,
                        relationship: relation,
                        phone: parentPhone,
                        email: parentEmail
                    },
                    packageType: studentPkg,
                    personOfRecommendation: rec,
                    recordOfFirstAppt: firstAppt,
                    transcript: transcript,
                    collegeList: collegeList,
                    phone: phone,
                    email: email,
                    highSchool: highSchool,
                }
            }
            props.onSubmit(studentObj);
        }
    }

    return (
        <Paper elevation={3}>
            <Typography component="h2" variant="h6"
                        gutterBottom className={classes.titleStyles}>
                Add New Student Info
            </Typography>
            <Divider />
            <div className={classes.rootContainer}>
                <form noValidate onSubmit={onStudentSubmit}>
                    <Typography variant={"h6"} className={classes.categoryTitle}>
                       Contact Information
                    </Typography>
                    <TextField required className={classes.textFieldStyles} id="sid-text" label="Student ID"
                               size="small" variant="outlined" fullWidth onChange={handleSID}/>
                    <TextField required className={classes.textFieldStyles} id="first-text" label="First Name"
                               size="small" variant="outlined" fullWidth onChange={handleFirst}/>
                    <TextField required className={classes.textFieldStyles} id="last-text" label="Last Name"
                               size="small" variant="outlined" fullWidth onChange={handleLast}/>
                    <TextField required className={classes.textFieldStyles} id="email-text" label="Email"
                               size="small" variant="outlined" fullWidth onChange={handleEmail}/>
                    <TextField required className={classes.textFieldStyles} id="phone-number" label="Phone Number"
                               size="small" variant="outlined" fullWidth onChange={handlePhone}/>
                    <TextField required className={classes.textFieldStyles} id="high-school-text" label="High School"
                               size="small" variant="outlined" fullWidth onChange={handleHighSchool}/>
                    <TextField required className={classes.textFieldStyles} id="grad-year-text" label="Graduation Year"
                               size="small" variant="outlined" fullWidth onChange={handleGradYear}/>
                    <TextField className={classes.textFieldStyles} id="attend-college-text" label="Attended College (if applicable)"
                               size="small" variant="outlined" fullWidth onChange={handleCollege}/>
                    <Divider /><br/>
                    {/*  Family Info  */}
                    <Typography variant={"h6"} className={classes.categoryTitle}>
                        Family Information
                    </Typography>
                    <TextField required className={classes.textFieldStyles} id="parent-text" label="Parent (Primary Contact)"
                               size="small" variant="outlined" fullWidth onChange={handleParent}/>
                    <TextField required className={classes.textFieldStyles} id="relation-text" label="Relationship"
                               size="small" variant="outlined" fullWidth onChange={handleRelation}/>
                    <TextField required className={classes.textFieldStyles} id="parent-phone" label="Phone Number"
                               size="small" variant="outlined" fullWidth onChange={handleParentPhone}/>
                    <TextField className={classes.textFieldStyles} id="parent-email" label="Email"
                               size="small" variant="outlined" fullWidth onChange={handleParentEmail}/>
                    <Divider /><br/>
                    {/*  Other Relevant Info  */}
                    <Typography variant={"h6"} className={classes.categoryTitle}>
                        Other Relevant Contents
                    </Typography>
                    <TextField className={classes.textFieldStyles} id="supervisor-text" label="Supervisor (consultant)"
                               size="small" variant="outlined" fullWidth onChange={handleSupervisor}/>
                    <TextField className={classes.textFieldStyles} id="package-type" label="Package Type"
                               size="small" variant="outlined" fullWidth onChange={handlePackage}/>
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Person of Recommendation"
                               size="small" variant="outlined" fullWidth onChange={handleRecPerson}/>
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="Record of First Appt. (Google Drive Link)"
                               size="small" variant="outlined" fullWidth onChange={handleFirstAppt}/>
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="High School Transcript (Google Drive Link)"
                               size="small" variant="outlined" fullWidth onChange={handleTranscript}/>
                    <TextField className={classes.textFieldStyles} id="outlined-basic" label="List of Colleges Applied (Google Drive Link)"
                               size="small" variant="outlined" fullWidth onChange={handleCollegeList}/>
                    <Button type="submit" variant="contained" className={classes.submit}>
                        Submit
                    </Button>
                </form>
            </div>
        </Paper>
    )
}

export default StudentForm;