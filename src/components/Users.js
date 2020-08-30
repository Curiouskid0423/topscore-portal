import React from "react";
import Dashboard from "./defaults/Templates";

const Users = () => {
    return (
        <div>
            This message is from Users Page.
        </div>
    )
};

const WrappedUsers = () => <Dashboard content={Users} />;


export default WrappedUsers;