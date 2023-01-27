import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const navigate = useNavigate();
const handleLog =()=>{
    localStorage.removeItem('token')
    navigate('/')

}

    return (
        <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand mx-4" href="#">Dialy Records</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto mx-4">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"to='/note'>Note</Link>
                        </li>
                        <li className="nav-item">
                           <button className='btn btn-danger' style={{borderRadius:'15px'}} onClick={handleLog}> Logout</button>
                        </li>  
                </ul>
            </div>
        </nav>
    )
}
