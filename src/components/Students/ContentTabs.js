import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {startSetContent} from "../../actions/content";
import ContentTabsDisplayItem from "./ContentTabsDisplayItem";

const ContentTabs = (props) => {

    // State to monitor if content is ready.
    // ready has three values: "NULL", "READY" (newly-loaded), and "PRELOADED"
    const [ready, setReady] = useState("NULL");
    useEffect(() => {
        if (props.content.partOverview === undefined) {
            setReady(props.dispatchSetContents(props.studentID));
        } else {
            setReady("PRELOADED");
        }
    }, []);

    let display = (<h3 style={{ marginLeft: "4rem", }}>Fetching from the database...</h3>);
    if (ready === "PRELOADED"
        || (ready === "READY" && props.content.partOverview !== undefined)){
        display = <ContentTabsDisplayItem {...props} />
    }
    return display;
}

const mapStateToProps = (state) => ({
    submitStatus: state.util.submitStatus || "",
    content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchSetContents: (id) => {
        dispatch(startSetContent(id));
        return "READY";
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentTabs);