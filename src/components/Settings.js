import React from "react";
import Dashboard from "./defaults/Templates";

const Settings = () => {
    return (
        <div>
            This message is from Settings Page.
        </div>
    )
};

const WrappedSettings = () => <Dashboard content={Settings} />;


export default WrappedSettings;