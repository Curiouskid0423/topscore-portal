import React from "react";
import Dashboard from "../defaults/Templates";

const Courses = () => {
    return (
        <div>
            This message is from Course Management Page.
        </div>
    )
};

const WrappedCourses = () => <Dashboard content={Courses} />;


export default WrappedCourses;