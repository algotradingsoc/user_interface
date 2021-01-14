import React from 'react'
import ResearchMember from "./ResearchMember";

function ResearchField(props) {
    return (
        <div className="modal fade" id={props.modal} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.description}
                    </div>
                    <div className="modal-footer">
                        {props.members.map(props =>
                                <ResearchMember
                                    key={props.id}
                                    src={props.src}
                                    alt={props.alt}
                                    target={props.target}
                                />
                                )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchField;