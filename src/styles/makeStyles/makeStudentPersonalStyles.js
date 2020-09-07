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
        backgroundColor: theme.palette.primary.main,
    },
    pkgPlan: {
        backgroundColor: theme.palette.secondary.main,
    },
    pkgApply: {
        backgroundColor: theme.palette.info.main,
    },
    pkgButton: {
        marginRight: ".5rem",
        color: "#fff",
        padding: ".5rem"
    },
    linkStyles: {
        textDecoration: "none",
        color: "inherit"
    }
});

export default makeStudentPersonalStyles;