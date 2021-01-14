import React from 'react'

function NavItem(props) {
    return (
        <li>
            <a className="nav-link js-scroll-trigger" href={props.url}>{props.category}</a>
        </li>
    )
}

export default NavItem;
