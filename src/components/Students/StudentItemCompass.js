import React, {useEffect, useState} from "react";
import { Switch, Link, useRouteMatch, withRouter } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import NotFound from "../404Page";
import CompassForm from "./Compass/CompassForm";

const StudentItemCompass = (props) => {

    const { path, url } = useRouteMatch();
    console.log(url);
    console.log(props);
    return (
        <div>
            <CompassForm />
        </div>
    );
}

export default withRouter(StudentItemCompass);