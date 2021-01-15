/**
 * @desc This file contains method(s) that checks whether the attempted login is authorized.
 * If yes, load the application for the user.
 * If not: Alert message. Redirect to log-in page.
 * (Make sure that the firebase security rule is set to prevent XSS attack).
 */

//Returns true if the user is allowed (i.e. user found in auth list).
export const checkAuthorizedUser = (authUserList, email) => {
    return authUserList.filter((el) => el.email === email).length !== 0;
}
