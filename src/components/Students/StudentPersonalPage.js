import React from "react";
import Dashboard from "../defaults/Templates";

const StudentPersonalPage = () => {
    return (
        <div>
            <p>Student Personal Page</p>
        </div>
    );
}

const WrappedStudentPage = () => <Dashboard content={StudentPersonalPage} />;

export default WrappedStudentPage;