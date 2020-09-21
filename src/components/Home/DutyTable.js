import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from "moment";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    dutyTableContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    table: {
        minWidth: 650,
    },
    saveButton: {
        background: "#DCD3C0",
        marginTop: "1rem",
        padding: ".5rem 5rem",
    },
});

const StyledTableTitle = withStyles((theme) => ({
    head: {
        backgroundColor: "#DCD3C0",
        color: theme.palette.common.black,
    },
}))(TableCell);


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Monday', 159, 6.0, 24, 4.0),
    createData('Tuesday', 237, 9.0, 37, 4.3),
    createData('Wednesday', 262, 16.0, 24, 6.0),
    createData('Thursday', 305, 3.7, 67, 4.3),
    createData('Friday', 356, 16.0, 49, 3.9),
    createData('Saturday', 356, 16.0, 49, 3.9),
    createData('Sunday', 356, 16.0, 49, 3.9),
];

const DutyTable = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.dutyTableContainer}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableTitle> Date </StyledTableTitle>
                            <StyledTableTitle align="right">Morning (9am - 12pm)</StyledTableTitle>
                            <StyledTableTitle align="right">Afternoon (2pm - 6pm)</StyledTableTitle>
                            <StyledTableTitle align="right">Evening (7pm - 9pm)</StyledTableTitle>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button className={classes.saveButton}> SAVE </Button>
        </div>
    );
}

export default DutyTable;