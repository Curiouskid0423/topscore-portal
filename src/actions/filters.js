/**
 * A file that contains all the filter actions
 */

export const setName = (name) => ({ type: "SET_NAME", name });

export const setCourse = (course) => ({ type: "SET_COURSE", course });

// pkg has to be a number
export const setPackage = (pkg) => ({ type: "SET_PACKAGE", pkg });

export const setYear = (year) => ({ type: "SET_YEAR", year });