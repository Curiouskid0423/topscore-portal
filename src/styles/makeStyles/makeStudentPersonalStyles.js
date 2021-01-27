/**
 * @desc Extracted a student's personal page's style.
 */

const makeStudentPersonalStyles = (theme) => ({
    infoColumn:{
        margin: theme.spacing(2),
        width: "90%"
    },
    gridCentered: {
        justifyContent: "center",
    },
    cardContainer: {
        paddingLeft: "1rem"
    },
    docLink: {
        marginBottom: ".5rem",
        padding: "1rem"
    },
    editStudent: {
        marginBottom: ".5rem"
    },
    pos: {
        marginBottom: 12,
    },
    pkgCourse: {
        backgroundColor: "#BD3A3A",     // Dark Red
    },
    pkgPlan: {
        backgroundColor: "#DCD3C0",     // Light Brown color
    },
    pkgApply: {
        backgroundColor: theme.palette.primary.main,
    },
    pkgButton: {
        marginRight: ".5rem",
        color: "#fff",
        padding: ".5rem"
    },
    linkStyles: {
        textDecoration: "none",
        color: "inherit"
    },
    specialIdStyles: {
        marginBottom: ".5rem",
        '& span': {
            display: "flex",
            alignItems: "center",
        }
    }
});

export default makeStudentPersonalStyles;