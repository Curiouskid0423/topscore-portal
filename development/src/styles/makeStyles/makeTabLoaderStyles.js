/**
 * @desc export Tab Loader styles.
 */

const makeTabLoaderStyles = () => ({
    addNewButtonDivider: {
        width: "2.5rem",
        margin: "auto",
        border: "none",
        height: "3px",
        background: "#e0cfa8",
    },
    addNewButtonContainer: {
        alignItems: "center",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
        flexDirection: "column",
        height: "100%",
        "&:hover": {
            transition: "ease-in-out .3s",
            transform: "scale(1.05)",
            cursor: "pointer",
        }
    },
    btnTitle: {
        color: "#000",
        fontFamily: "\'Commissioner\', sans-serif",
        fontWeight: 600,
        fontSize: "1.1rem",
        textAlign: "center",
    },
    timestamp: {
        fontSize: 14,
    },
    reportCardContainer: {
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
    },
    reportCardItemContainer: {
        margin: "1rem 2rem 0 0",
        width: "200px",
        height: "180px",
    },
    reportCardItemLink: {
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
        }
    },
    topLineDecoration: {
        width: "2.5rem",
        marginBottom: "1rem",
        marginLeft: "0",
        border: "none",
        height: "3px",
        background: "#e0cfa8",
    },
});

export default makeTabLoaderStyles;