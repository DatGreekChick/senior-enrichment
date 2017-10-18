import React, { Component } from 'react';
import Header from './Header';
// child of Header:
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
        {/*<Header/>*/}
          <Navbar/>
        {/*<Carousel/>*/}
        {/*<Footer/>*/}
      </div>
    )
  }
}