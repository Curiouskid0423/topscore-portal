import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    flexStyle: {
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem"
    },
    avatarStyle: {
        marginRight: "1rem",
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: theme.palette.primary.light,
    },
    tableHead: {
        backgroundColor: theme.palette.secondary.main,
    }
}));


const StudentItemOverview = () => {
    const classes = useStyles();
    const rows = [
        ["Test Date", "2019-07-12"],
        ["Reading", 300],
        ["Writing", 370],
        ["Math", 790],
        ["Optional Writing", "7-7-7"]
    ]

    return (
        <Grid container className={classes.root}>
            <Grid item sm={6}>
                <div className={classes.flexStyle}>
                    <Avatar className={classes.avatarStyle} > <SearchIcon/> </Avatar>
                    <Typography variant={"h5"} component={"span"}>
                        <span style={{ fontWeight: 500 }}>AT A GLANCE</span>
                    </Typography>
                </div>
                <div>
                    <Paper elevation={3} style={{margin: "0 1rem 1rem 0"}}>
                        <TextField
                            id="outlined-multiline-static" label="Notes"
                            multiline rows={5} variant="outlined" fullWidth/>
                    </Paper>
                    <Paper elevation={3} style={{margin: "0 1rem 1rem 0"}}>
                        <TextField
                            id="outlined-multiline-static" label="Family Info (Sibling Information)"
                            multiline rows={5} variant="outlined" fullWidth/>
                    </Paper>
                </div>
            </Grid>
            <Grid item sm={6}>
                <div className={classes.flexStyle}>
                    <Avatar className={classes.avatarStyle} > <AssignmentTurnedInIcon/> </Avatar>
                    <Typography variant={"h5"} component={"span"}>
                        <span style={{ fontWeight: 500 }}>PRE-TEST RESULT</span>
                    </Typography>
                </div>
                <div>
                    {/* Pre-test result table */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    <TableCell style={{ color: "#fff" }}>Entry</TableCell>
                                    <TableCell align={"right"} style={{ color: "#fff" }}>
                                        Score
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row[0]}>
                                        <TableCell component="th" scope="row">{row[0]}</TableCell>
                                        <TableCell align="right"> {row[1]} </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Grid>
        </Grid>
    );
}

export default StudentItemOverview;