import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <li> <a href ="https://mail.google.com/mail/&ogbl">Gmail</a></li>
            <li> <a href ="https://www.google.co.in/imghp?hl=en&ogbl">Images</a></li>
            <li> <a href ="https://www.google.co.in/intl/en/about/products"><span className="material-icons">
            apps
            </span></a></li>
            <li> <a href =""><span className="material-icons">
            account_circle
            </span> </a></li>
        </div>
    )
}

export default Navbar
