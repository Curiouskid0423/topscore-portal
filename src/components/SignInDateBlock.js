import React from "react";
import moment from "moment";

const getGreetings = (momentObj) => {
    if (!momentObj.isValid()) {
        return "";
    }
    const splitAfternoon = 12;
    const splitEvening = 17;
    const current = parseFloat(momentObj.format("HH"));
    if (current <= splitAfternoon){
        return "Good Morning";
    } else if (current > splitEvening) {
        return "Good Evening";
    } else {
        return "Good Afternoon";
    }
}

const SignInDateBlock = () => {
    const date = moment().format("MMM Do");
    const time = moment().format("HH:mm");
    const weekday = moment().format("ddd");
    return (
        <div className={"signin-box"}>
            <div className={"signin-box__info"}>
                <div className={"signin-box__left"}>
                    <div className={"signin-box__date"}> {date} </div>
                    <div className={"signin-box__week"}> {weekday} </div>
                </div>
                <div className={"signin-box__right"}> {time} </div>
            </div>
            <div className={"signin-box__greetings"}>
                {getGreetings(moment())}
            </div>
        </div>
    )
}

export default SignInDateBlock;