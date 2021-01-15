import React from 'react';
import NavItem from "./NavItem";
import NavbarList from "./NavItemsList";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#root">IC | AlgoTrade</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {NavbarList.map(props =>
                            <NavItem
                                key={props.id}
                                url={props.url}
                                category={props.description}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;