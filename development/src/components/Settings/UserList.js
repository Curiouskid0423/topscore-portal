import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { connect } from "react-redux";

const useStyles = makeStyles({
    userListStyles: {
        marginBottom: "2rem",
    },
    tableRow: {
        "& th": {
            background:"#DCD3C0",
        }
    }
});

const UserList = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.userListStyles}>
            <TableContainer component={Paper} className={classes.userListStyles}>
                <Table stickyHeader>
                    {/* Enroll Course __ Header */}
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell>User ID</TableCell>
                            <TableCell>User Type</TableCell>
                            <TableCell align={"right"}> Email </TableCell>
                        </TableRow>
                    </TableHead>
                    {/* Enroll Course __ Body */}
                    <TableBody>
                        {props.userDB.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row"> {row.id} </TableCell>
                                <TableCell component="th" scope="row"> <b>{row.type}</b> </TableCell>
                                <TableCell align="right" size={"small"}> <b>{row.email}</b> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <hr/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    userDB: state.auth.userDB
})

export default connect(mapStateToProps)(UserList);