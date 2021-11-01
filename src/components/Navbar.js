import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto fs-6">
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">Experience</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
