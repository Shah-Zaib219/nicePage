// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Contactnav = () => {
  return (
    <div className='contactone'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navcss">
        <div className="container-fluid navcsss">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <h2 className="navbar-brand">Nice Page</h2>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to='/Contact'>Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
      <div className='contactonesub'>
        <h2>inspiration
        </h2>
        
      </div>
    </div>
  );
}

export default Contactnav;
