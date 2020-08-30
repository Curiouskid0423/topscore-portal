import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Dashboard from "./defaults/Templates";
import StudentItem from "./Students/StudentItem";

/**
 * Loader for Student Items
 * @param students
 * @return a Loader Helper React Component.
 */
const StudentLoader = ({ students } = {}) => {
    return students.map(
        (item) => <StudentItem key = {item.id} {...item.contact}/>
    );
}

const StudentHome = (props) => {
    return (
        <div>
            <Typography>Student Directory</Typography>
            <StudentLoader students = {props.students}/>
        </div>
    )
};

const mapStatesToProps = (states) => ({
    students: states.students,
});

const WrappedStudentHome = () => {
    return (
        <Dashboard content={connect(mapStatesToProps)(StudentHome)} />
    );
}


export default WrappedStudentHome;