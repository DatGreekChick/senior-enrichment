import React, { Component } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';

export default class InterPlanetary extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Carousel/>
        <Footer/>
      </div>
    )
  }
}