/**
 * @desc A utility action file. Controls centralized data across components.
 */

export const templateDrawerChange = () => ({
    type: "TMP_DRAWER_CHANGE"
});


/**
 * @desc SubmitMessage takes care of:
 * Either an empty string (submission cleared), "success", or "error".
 */
export const submitMessage = (submitStatus) => ({
    type: "SUBMIT_MSG",
    submitStatus
});