import React from "react";
import { connect } from "react-redux";
import {templateDrawerChange} from "../../actions/utility";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {mainListItems} from "./listItems";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import templateStyles from "../../styles/makeStyles/makeTemplateStyles";

const useStyles = makeStyles(templateStyles);

const LeftDrawer = (props) => {

    const classes = useStyles();
    const handleDrawerClose = () => props.dispatchDrawer();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !props.drawerOpen && classes.drawerPaperClose),
            }}
            open={props.drawerOpen}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
        </Drawer>
    )
}


const mapStateToProps = (state) => ({
    drawerOpen: state.util.templateDrawerOpen
})
const mapDispatchToProps = (dispatch) => ({
    dispatchDrawer: () => dispatch(templateDrawerChange())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);