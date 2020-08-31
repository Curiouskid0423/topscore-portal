import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import {Link} from "react-router-dom";

/**
 * @desc listItem lists out all the items in the leftDrawer.
 */

export const mainListItems = (
    <div>
        {/* Dashboard */}
        <Link to={"/dashboard"} className={"reactLinkStyle"}>
            <ListItem button>
                <ListItemIcon> <BarChartIcon /> </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
        </Link>
        {/* Students */}
        <Link to={"/students"} className={"reactLinkStyle"}>
            <ListItem button>
                <ListItemIcon> <PeopleIcon /> </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
        </Link>
        {/* Courses */}
        <Link to={"/courses"} className={"reactLinkStyle"}>
            <ListItem button>
                <ListItemIcon> <LibraryBooksIcon /> </ListItemIcon>
                <ListItemText primary="Courses" />
            </ListItem>
        </Link>
        {/* Settings */}
        <Link to={"/settings"} className={"reactLinkStyle"}>
            <ListItem button>
                <ListItemIcon> <SettingsIcon /> </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </Link>
    </div>
);
