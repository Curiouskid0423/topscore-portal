import React from "react";
import Dashboard from "../defaults/Templates";
import Header from "../defaults/Header";

const Home = () => {
    return (
        <div>
            <Header title={"DASHBOARD"} />
        </div>
    )
};

const WrappedHome = () => <Dashboard content={Home} />;


export default WrappedHome;