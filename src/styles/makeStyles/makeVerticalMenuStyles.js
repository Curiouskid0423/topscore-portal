import {makeStyles} from "@material-ui/core/styles";

/**
 * @desc Extract the makeStyle hook from  Settings Menu.
 */

const menuStyles = (theme) => ({
    root: {
        display: "flex"
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    navLinkStyle: {
        textDecoration: "none",
        color: "#333333",
    },
    menuButton: {
        padding: "1rem",
    }
});

export default menuStyles;