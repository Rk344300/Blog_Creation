import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul id="list">
                <li>
                    <Link to="/"> Home
                    </Link>
                </li>
                <li>
                    <Link to="/createblog">Create Blog</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
