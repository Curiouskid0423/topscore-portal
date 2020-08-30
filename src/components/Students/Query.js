import React, {useState} from "react";
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

const useStyles = makeStyles({
    formStyles: {
        width: "100%"
    },
    queryContainer: {
        margin: "1.5rem 0",
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
        padding: ".5rem 4rem"
    }
})

const Query = (props) => {
    const classes = useStyles();
    // states
    const [showFilters, setFiltersOpen] = useState(false);
    const [pkgFilter, setpkgFilter] = useState(undefined);
    const handleFilters = () => setFiltersOpen(!showFilters);
    const handlePkg = (value) => setpkgFilter(value);
    return (
        <ThemeProvider theme={theme}>
            <Grid container item sm={12} className={classes.queryContainer}>
                <Grid item sm={9}>
                    <form noValidate autoComplete="off" className={classes.formStyles}>
                        <TextField id="standard-basic" fullWidth label="Search student" />
                        <div className={clsx(!showFilters && classes.hideFilters)}>
                            <TextField className={classes.textFilter} id="standard-basic" label="Filter Grad Year" />
                            <TextField className={classes.textFilter} id="standard-basic" label="Filter by Course" />
                            <TextField className={classes.textFilter} id="standard-basic" label="Filter by HighSchool" />
                            <FormControl className={classes.formControl}>
                                <InputLabel>Package</InputLabel>
                                <Select
                                    labelId="package-type-label" id="package-select"
                                    value={pkgFilter} onChange={handlePkg}
                                >
                                    <MenuItem value={1}>Course</MenuItem>
                                    <MenuItem value={2}>Planning</MenuItem>
                                    <MenuItem value={3}>Application</MenuItem>
                                    <MenuItem value={undefined}>--</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Button onClick={handleFilters}>Filters</Button>
                    </form>
                </Grid>
                <Grid item sm={3}>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Query;