import React from "react";
import moment from "moment";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    table: {
        width: "100%"
    },
    tableContainer: {
        maxHeight: "250px",
        marginBottom: "1.5rem"
    },
});

const StyledTableTitle = withStyles((theme) => ({
    head: {
        backgroundColor: "#DCD3C0",
        color: theme.palette.common.black,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const CourseTable = (props) => {
    const classes = useStyles();

    return (
        <div>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table stickyHeader className={classes.table}>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableTitle align="left" colSpan={6}>
                                <Typography variant={"button"} component={"p"}>
                                    {props.title}
                                </Typography>
                            </StyledTableTitle>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {(props.lst || []).map((row) => (
                            <StyledTableRow key={row.courseName}>
                                <TableCell component="th" scope="row">
                                    {row.courseName}
                                </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.instructor}</TableCell>
                                <TableCell align="right">{moment(row.startDate).format('MMM Do \'YY')}</TableCell>
                                <TableCell align="right">
                                    {moment(row.startDate).add(row.repeatTimes, row.repeatBy).format('MMM Do \'YY')}
                                </TableCell>
                                {props.isCurrent && <TableCell align="right">
                                    <Button>Done</Button>
                                </TableCell>}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default CourseTable;