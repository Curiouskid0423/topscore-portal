import React from "react";
import Dashboard from "./Templates";

const templateWrapper = (Content) => {
    // return Content;
    return (
        <Dashboard content={Content} />
    )
}

export default templateWrapper;