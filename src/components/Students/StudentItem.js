import React from "react"

/**
 * StudentItem will be a card.
 * @param student is a student object from firebase.
 * @return a StudentItem object
 */
const StudentItem = (props) => {
    return (
        <div>
            {props.email}
        </div>
    )
}

export default StudentItem;