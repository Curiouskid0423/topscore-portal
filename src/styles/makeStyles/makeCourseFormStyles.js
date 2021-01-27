/**
 * @desc Extracted Style Hook object from Course Form for the sake of readability.
 */

const makeCourseFormStyles = (theme) => ({
    rootContainer: {
        padding: "2rem"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    titleStyles: {
        paddingTop: "1rem",
        paddingLeft: "2.5rem",
        textTransform: "uppercase",
        color: "#5B3330"
    },
    textFieldStyles: {
        margin: "1rem .5rem"
    },
    submit: {
        margin: "1rem .5rem",
        backgroundColor: "#DCD3C0",
    }
});

export default makeCourseFormStyles;