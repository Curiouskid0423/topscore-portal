import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles({
   currentRoot: {
       height: "30vh",
       marginTop: "1rem"
   },
    courseListStyles: {
       margin: "1rem 0 0 .5rem",
       maxHeight: "60vh",
    }
});

const StudentItemCore = (props) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item md={8} sm={12}>
                {/* Current Course.  */}
                <Card className={classes.currentRoot}>
                    <CardContent>
                        <Typography variant={"h6"} component={"p"}>
                            Current Course List.
                        </Typography>
                    </CardContent>
                </Card>
                {/* Past Course. */}
                <Card className={classes.currentRoot}>
                    <CardContent>
                        <Typography variant={"h6"} component={"p"}>
                            Past Course List.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} sm={12}>
                {/* Add new course. */}
                <TableContainer component={Paper} className={classes.courseListStyles}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: "#000" }}>CourseName</TableCell>
                                <TableCell align={"right"} style={{ color: "#000" }}>
                                    Instructor
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.courseList.map((row) => (
                                <TableRow key={row.uid}>
                                    <TableCell component="th" scope="row">{row.courseName}</TableCell>
                                    <TableCell align="right"> {row.instructor} </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    courseList: state.courses
})

export default connect(mapStateToProps)(StudentItemCore);