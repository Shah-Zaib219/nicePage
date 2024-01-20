// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='one'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navcss">
        <div className="container-fluid navcsss">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <h2 className="navbar-brand">Nice Page</h2>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link"  to="/Home">Home</Link>
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
      <div className='onesub'>
        <h2>Finding the best car insurance <br /> company for you
        </h2>
        <p>Pricing and discounts made up a portion of each insurer’s score, but we know that cost is the top factor for many auto insurance shoppers. Since pricing is based on personal factors including your age, location, vehicle, and credit history and gender (in most cases), it’s important to shop around for car insurance quotes.</p>
        <p>If the price is the most important factor in your search, comparing car insurance quotes can help you find the cheapest rate. But your shopping experience will also shed light on a company’s customer service standards.</p>
        <span>&gt;&gt;</span>
      </div>
    </div>
  );
}

export default Nav;
