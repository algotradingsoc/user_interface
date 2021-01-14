import React from 'react'

function ResearchBox(props) {
    return (
        <div className="col-md-6 text-center">
                <div className="mt-5 card">
                    <div className="card-body" data-toggle="modal" data-target={"#" + props.modal}>
                        <h3 className="mb-3 card-title">{props.title}</h3>
                        <p className="text-muted mb-0">{props.about}</p>
                    </div>
                </div>
        </div>
    )
}

export default ResearchBox