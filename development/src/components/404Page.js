import React from "react";
import {Link} from "react-router-dom";
import TopBar from "./defaults/TopBar";

// <Link> tag utilizes client side routing by aborting the event listener,
// and manually link internally to our javascript.
const NotFound = (props) => {
    console.log(props);
    return (
        <div style={{ backgroundImage: "url(\"images/404.jpeg\")", backgroundSize: "cover", height: "100vh" }}>
            <TopBar />
            <div>
                <Link to = "/">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound;