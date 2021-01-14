import React from 'react'

function Contact(props) {
    return (
         <div className="col-md-6 mb-3 mb-md-0">
             <div className="card py-4 h-100">
                 <div className="card-body text-center">
                     <i className={`text-primary mb-2 ${props.icon}`}/>
                     <h4 className="text-uppercase m-0">{props.name}</h4>
                     <hr className="my-4" />
                     <div className="small text-black-50">
                         <a href={props.url}>{props.link}</a>
                     </div>
                 </div>
             </div>
         </div>
    )
}

export default Contact
