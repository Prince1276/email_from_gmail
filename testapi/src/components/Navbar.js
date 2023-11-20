import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // Import your logo image here
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Mail sending form </h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Contact form </Link>
        </li>
        <li>
          <Link to="/about">About page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
