import React from 'react'

function ResearchMemberModal(props) {
    return (
        <div className="modal fade" id={props.target} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-personal" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="">{props.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xs-12 col-lg-5 modal-img text-center">
                                <img className="mx-auto mb-3 ml-lg-4 rounded-circle personal-image"
                                     src={process.env.PUBLIC_URL + props.src} alt={props.name} width="200px" height="200px"/>
                            </div>
                            <div className="col-xs-12 col-lg-7 modal-text">
                                <h5>{props.role}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href={props.github} target="_blank"><i className="fab fa-github fa-2x"/></a>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href={props.linkedIn} target="_blank"><i className="fab fa-linkedin fa-2x"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchMemberModal
