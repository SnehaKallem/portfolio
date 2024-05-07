import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Import your custom CSS file for styling

const Header1 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="Sneha1.jpeg" alt="Profilepic" className="img-fluid rounded-circle" style={{ width: '30px', height: '30px' }} />
                    Sneha Kallem
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutme">About</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#projects1">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header1;
