import React from 'react';

import Campuses from './Campuses';
import Teachers from './Teachers';
import Students from './Students';

// this is hard-coded (h3's)
const Navbar = () => {
  return <nav className="nav-bar">
    <h3>Our Students</h3>
    <h3>Our Teachers</h3>
    <h3>Our Campuses</h3>
  </nav>
};

export default Navbar

/*
FOR REFERENCE:
import React, { Component } from 'react';
import NameEntry from './NameEntry';

export default class Navbar extends Component {
  render () {
    return (
      <nav>
        <h3># channelname goes here</h3>
        <NameEntry />
      </nav>
    );
  }
}
 */