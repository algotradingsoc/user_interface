import React from 'react'

function Title() {
    return (
        <header className="masthead text-center text-white d-flex"
                style={{"background": "linear-gradient(to bottom, rgba(22, 22, 22, 0.7) 50%, rgba(22, 22, 22, 0.5) 75%, " +
                        "#161616 100%), url(" + process.env.PUBLIC_URL + "/images/background-pic.jpg)",
                        "backgroundPosition": "center center", "backgroundSize": "cover" }}>
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase">
                            Algorithmic Trading Research
                        </h1>
                        <hr />
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <p className="text-uppercase">
                            Imperial College London
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Title;