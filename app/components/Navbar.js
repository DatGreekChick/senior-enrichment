import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import store from '../store.jsx';

const logo = 'https://vignette.wikia.nocookie.net/witcher/images/3/38/TW3_English_logo.png/revision/latest?cb=20150923154606';

const Navbar = () => {
  return <nav className="nav-bar">
    <Link to={'/'}>
      <img className="logo" src={logo}
           alt="witcher-logo"/>
    </Link>
    <Link to={'/students'}><h3>Students</h3></Link>
    <Link to={'/teachers'}><h3>Teachers</h3></Link>
    <Link to={'/campuses'}><h3>Campuses</h3></Link>
  </nav>
};

export default Navbar