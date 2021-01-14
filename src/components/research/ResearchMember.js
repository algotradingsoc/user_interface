import React from 'react'

function ResearchMember(props) {
    return (
        <img className="members-image" src={props.src} alt={props.alt} data-toggle="modal" data-target={"#" + props.target} />
    )
}

export default ResearchMember