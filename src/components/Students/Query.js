import React, {useState} from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import theme from "../../themes";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Header from "../defaults/Header";
import {setCourse, setName, setPackage, setYear} from "../../actions/filters";

const useStyles = makeStyles({
    buttonGroup: {
        display: "flex",
        "& button": {
            marginRight: "1.5rem"
        }
    },
    formStyles: {
        width: "100%"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180
    },
    textFilter: {
        marginTop: "0.5rem",
        paddingRight: "2rem"
    },
    hideFilters: {
        display: "none"
    },
    searchButton: {
        display: "block",
        margin: ".5rem auto",
        padding: ".5rem 2.5rem"
    }
})

const Query = (props) => {
    const classes = useStyles();
    // states
    const [showFilters, setFiltersOpen] = useState(false);
    const [pkgFilter, setpkgFilter] = useState("");
    const [gradYear, setgradYear] = useState(props.filter.gradYear);
    const [studentName, setStudentName] = useState(props.filter.name);
    // handler functions
    const handleFilters = () => setFiltersOpen(true);
    const handlePkg = (e) => {
        setpkgFilter(e.target.value);
        props.setPackage(e.target.value);
    }
    const handleGradYear = (e) => {
        setgradYear(e.target.value);
        props.setYear(e.target.value);
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
            {/* Directory Header and BreadCrumb. */}
            <Grid item sm={12}> <Header title={"STUDENT DIRECTORY"} /> </Grid>
            {/* Directory content */}
            <Grid container item sm={12}>
                <Grid item sm={9}>
                    <form noValidate autoComplete="off" className={classes.formStyles}>
                        <TextField id="standard-basic" fullWidth
                                   label="Search student" onChange={handleName}/>
                        <div className={clsx(!showFilters && classes.hideFilters)}>
                            <TextField className={classes.textFilter} id="standard-basic"
                                       label="Filter Grad Year" onChange={handleGradYear}/>
                            <TextField className={classes.textFilter} id="standard-basic" label="Filter by Course" />
                            {/*<TextField className={classes.textFilter} id="standard-basic" label="Filter by HighSchool" />*/}
                            <FormControl className={classes.formControl}>
                                <InputLabel>Package</InputLabel>
                                <Select
                                    labelId="package-type-label" id="package-select"
                                    value={pkgFilter === "" ? "" : pkgFilter} onChange={handlePkg}
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
                            className={classes.searchButton}>
                        Get List
                    </Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => ({
    filter: state.filters.visibleStudents
});

const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch(setName(name)),
    setCourse: (course) => dispatch(setCourse(course)),
    setPackage: (pkg) => dispatch(setPackage(pkg)),
    setYear: (year) => dispatch(setYear(year))
});

export default connect(mapStateToProps, mapDispatchToProps)(Query);