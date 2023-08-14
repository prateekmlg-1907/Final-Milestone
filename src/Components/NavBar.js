import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './Navbar.css';
import image1 from './Crave Crafters.png';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md justify-content-center bg-dark navbar-dark fixed-top mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Gabriola', fontSize: '35px', fontWeight: 'bold', color: '#C8E4B2' }}>
          <img src={image1} style={{height:50, width:80}} alt="Logo" className="logo-image mx-3" />
          Crave Crafters
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontFamily: 'Comic Sans MS', fontSize: '18px', fontWeight: 'bold', color: '#A7ECEE' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" style={{ fontFamily: 'Comic Sans MS', fontSize: '18px', fontWeight: 'bold', color: '#A7ECEE' }}>My Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create" style={{ fontFamily: 'Comic Sans MS', fontSize: '18px', fontWeight: 'bold', color: '#A7ECEE' }}>Create Recipe</Link>
            </li>
          </ul>
            <input className="form-control justify-center" type="search" placeholder="Search" />
            <button type="button" class="btn btn-info " type ="submit">Search</button>
          <Link className='btn btn-warning mx-1' to="/login">Login</Link>
          <Link className='btn btn-warning mx-1' to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
