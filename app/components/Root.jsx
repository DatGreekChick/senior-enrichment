import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class InterPlanetary extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Footer/>
      </div>
    )
  }
}