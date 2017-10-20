import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import store from '../store.jsx';

const Navbar = () => {
  return <nav className="nav-bar">
    <Link to={'/students'}><h3>Students</h3></Link>
    <Link to={'/teachers'}><h3>Teachers</h3></Link>
    <Link to={'/campuses'}><h3>Campuses</h3></Link>
  </nav>
};

export default Navbar