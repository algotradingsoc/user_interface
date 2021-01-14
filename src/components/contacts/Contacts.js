import React from 'react'
import ContactsList from "./ContactsList";
import Contact from "./Contact";

function Contacts() {
    return (
        <section id="contact" className="contact-section bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading text-white">CONTACT US</h2>
                        <hr className="my-4 mb-5 "/>
                    </div>
                </div>
                <div className="row">
                    {ContactsList.map(props =>
                        <Contact
                            key={props.id}
                            name={props.name}
                            url={props.url}
                            link={props.link}
                            icon={props.icon}
                        />
                    )}
                </div>
            </div>
        </section>
    )
};

export default Contacts