import React, {useState} from "react";
import { useRouteMatch, withRouter } from "react-router-dom";

import CompassForm from "./Compass/CompassForm";

const StudentItemCompass = (props) => {
    return (
        <div>
            <CompassForm />
        </div>
    );
}

export default withRouter(StudentItemCompass);