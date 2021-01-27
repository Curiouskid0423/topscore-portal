import theme from "../../themes";
import React from "react";

/**
 * @desc This file contains the style object of Query Object.
 */

export const queryStyles = {
    exportListStyles: {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 0",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTitle: {
        fontFamily: "\'Commissioner\', sans-serif",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    buttonGroup: {
        display: "flex",
        "& button": {
            marginRight: "1.5rem"
        }
    },
    formStyles: {
        width: "100%"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180
    },
    table: {
        minWidth: 1000,
    },
    tableContainer: {
        maxHeight: "550px",
        minWidth: "81vw",
        maxWidth: "90vw",
    },
    textFilter: {
        marginTop: "0.5rem",
        paddingRight: "2rem"
    },
    hideFilters: {
        display: "none"
    },
    searchButton: {
        display: "block",
        margin: ".5rem auto",
        padding: ".5rem 2.5rem"
    }
};