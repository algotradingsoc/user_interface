import React from 'react'
import ResearchList from "./ResearchList";
import ResearchField from "./ResearchField";
import ResearchBox from "./ResearchBox";
import ResearchMemberModal from "./ResearchMemberModal";

function Research() {
    return (
        <section id="research">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Research Fields</h2>
                        <hr className="mt-4 mb-2" />
                    </div>
                </div>
            </div>
            <div>
                <div className="container profiles">
                    <div className="row justify-content-center">
                        {ResearchList.map(props =>
                            <ResearchBox
                                key={props.id}
                                title={props.title}
                                modal={props.modal}
                                about={props.about}
                            />
                        )}
                        {ResearchList.map(props =>
                            <ResearchField
                                key={props.id}
                                title={props.title}
                                members={props.members}
                                modal={props.modal}
                                description={props.description}
                            />
                        )}
                        {ResearchList.map(props =>
                            props.members.map(info =>
                                <ResearchMemberModal
                                    key={info.id}
                                    src={info.src}
                                    alt={info.alt}
                                    target={info.target}
                                    name={info.name}
                                    role={info.role}
                                    github={info.github}
                                    linkedIn={info.linkedIn}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Research
