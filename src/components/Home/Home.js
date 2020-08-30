import React from "react";
import Dashboard from "../defaults/Templates";

const Home = () => {
    return (
        <div>
            This message is from Home Page.
        </div>
    )
};

const WrappedHome = () => <Dashboard content={Home} />;


export default WrappedHome;