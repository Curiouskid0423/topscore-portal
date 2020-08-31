import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import { NavLink, useRouteMatch } from "react-router-dom";
import menuStyles from "../../styles/makeStyles/makeVerticalMenuStyles";

const useStyles = makeStyles(menuStyles);

const SettingsMenu = () => {
    const classes = useStyles();
    let { url } = useRouteMatch();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <MenuList>
                    <NavLink to={`${url}/updateAccount`} className={classes.navLinkStyle}>
                        <MenuItem className={classes.menuButton}>
                            Update My Account
                        </MenuItem>
                    </NavLink>
                    <NavLink to={`${url}/addStudent`} className={classes.navLinkStyle}>
                        <MenuItem className={classes.menuButton}>
                            Add Student
                        </MenuItem>
                    </NavLink>
                    <NavLink to={`${url}/manageUsers`} className={classes.navLinkStyle}>
                        <MenuItem className={classes.menuButton}>
                            Manage User
                        </MenuItem>
                    </NavLink>
                </MenuList>
            </Paper>
        </div>
    )
}

export default SettingsMenu;