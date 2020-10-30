import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import {makeStyles, ThemeProvider, withStyles} from "@material-ui/core/styles";
import theme from "../../themes";
import clsx from "clsx";
import {setCourse, setName, setPackage, setYear} from "../../actions/filters";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import getVisibleStudents from "../../selectors/getVisibleStudents";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import {queryStyles} from "../../styles/makeStyles/makeQueryStyles";
import Header from "../defaults/Header";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(queryStyles);

const StyledTitleCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#DBD3C0",
        color: theme.palette.common.white,
        fontSize: 15
    },
    body: {
        fontSize: 12
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

// The table has 8 columns.
const tableTitles = [
    "Student ID", "Name", "Email",
    "High School", "Graduation Year", "Attended College",
    "Phone", "Parent Phone"
];


const Query = (props) => {
    const classes = useStyles();
    // Upon un-mounting, clear the query string and other filter options.
    useEffect(() => {
        return () => {
            props.setName("");
            props.setYear(0);
            props.setPackage("");
        }
    }, []);

    // states
    const [showFilters, setFiltersOpen] = useState(false);
    const [pkgFilter, setpkgFilter] = useState("");
    const [gradYear, setgradYear] = useState(props.filter.gradYear);
    const [studentName, setStudentName] = useState(props.filter.name);
    const [open, setOpen] = React.useState(false);
    const handleModalChange = () => setOpen(!open);
    // handler functions
    const handleFilters = () => setFiltersOpen(true);
    const handlePkg = (e) => {
        setpkgFilter(e.target.value);
        props.setPackage(e.target.value);
    }
    const handleGradYear = (e) => {
        const regex = /[1-9][0-9]{3}/g;
        if (e.target.value !== "" && !e.target.value.match(regex)) {
            return;
        }
        const parsedYear = JSON.parse(e.target.value || 0);
        setgradYear(parsedYear);
        props.setYear(parsedYear);
    }
    const handleName = (e) => {
        setStudentName(e.target.value);
        props.setName(e.target.value);
    }
    const handleCloseFilters = () => {
        setFiltersOpen(false);
    }

    return (
        <ThemeProvider theme={theme}>
            {/* Directory content */}
            <Grid container item sm={12}>
                <Grid item sm={9}>
                    <form noValidate autoComplete="off" className={classes.formStyles}>
                        <TextField id="standard-basic" fullWidth
                                   label="Search student" onChange={handleName}/>
                        <div className={clsx(!showFilters && classes.hideFilters)}>
                            <TextField type={"number"} className={classes.textFilter} id="standard-basic"
                                       label="Filter Grad Year" onChange={handleGradYear}/>
                            <TextField className={classes.textFilter} id="standard-basic" label="Filter by Course" />
                            {/*<TextField className={classes.textFilter} id="standard-basic" label="Filter by HighSchool" />*/}
                            <FormControl className={classes.formControl}>
                                <InputLabel>Package</InputLabel>
                                <Select
                                    labelId="package-type-label" id="package-select"
                                    value={pkgFilter} onChange={handlePkg}
                                >
                                    <MenuItem value={""}>--</MenuItem>
                                    <MenuItem value={"Course"}>Course</MenuItem>
                                    <MenuItem value={"Planning"}>Planning</MenuItem>
                                    <MenuItem value={"Application"}>Application</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={classes.buttonGroup}>
                            <Button onClick={handleFilters}>Show Filters</Button>
                            <Button onClick={handleCloseFilters}>Close Filters</Button>
                        </div>
                    </form>
                </Grid>
                <Grid item sm={3}>
                    <Button variant={"contained"} color={"primary"}
                            className={classes.searchButton} onClick={handleModalChange}>
                        Get List
                    </Button>
                </Grid>
            </Grid>
            {/* Get_List Modal  */}
            <Modal
                className={classes.modal} open={open} onClose={handleModalChange}
                closeAfterTransition BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.exportListStyles}>
                            <Typography component="h2" variant="h4" gutterBottom className={classes.modalTitle}>
                                STUDENT LIST
                            </Typography>
                            <Button variant="outlined" size="small" color="primary">
                                 Viewing { props.availableStudents.length } students
                            </Button>
                        </div>
                        <TableContainer component={Paper} className={classes.tableContainer}>
                            <Table stickyHeader className={classes.table}>
                                {/*  Header */}
                                <TableHead>
                                    <TableRow>
                                        {tableTitles.map((colName) => (
                                            <StyledTitleCell align="center" key={colName}>
                                                {colName}
                                            </StyledTitleCell>)
                                        )}
                                    </TableRow>
                                </TableHead>
                                {/*  Table Body  */}
                                <TableBody>
                                    {props.availableStudents.map((entry) => (
                                        <StyledTableRow key={entry.uid}>
                                            <StyledTitleCell component={"th"} scope={"row"}>{entry.id}</StyledTitleCell>
                                            <StyledTitleCell align="center">
                                                {entry.contact.firstName + " " + entry.contact.lastName}
                                            </StyledTitleCell>
                                            <StyledTitleCell align="center">{entry.contact.email}</StyledTitleCell>
                                            <StyledTitleCell align="center">{entry.contact.highSchool}</StyledTitleCell>
                                            <StyledTitleCell align="center">{entry.contact.graduationYear}</StyledTitleCell>
                                            <StyledTitleCell align="center">{entry.contact.attendedCollege}</StyledTitleCell>
                                            <StyledTitleCell align="center">{entry.contact.phone}</StyledTitleCell>
                                            <StyledTitleCell align="center">{entry.contact.family.phone}</StyledTitleCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Fade>
            </Modal>
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => ({
    filter: state.filters.visibleStudents,
    availableStudents: getVisibleStudents(state.students, state.filters.visibleStudents)
});

const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch(setName(name)),
    setCourse: (course) => dispatch(setCourse(course)),
    setPackage: (pkg) => dispatch(setPackage(pkg)),
    setYear: (year) => dispatch(setYear(year))
});

export default connect(mapStateToProps, mapDispatchToProps)(Query);