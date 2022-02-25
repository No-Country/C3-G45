import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/login">Sign in</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </ul>
    )
}

export default UserNav