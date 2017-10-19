import React, { Component } from 'react';
// import Header from './Header';
// child of Header:
import Navbar from './Navbar';
// import Carousel from './Carousel';
// import Footer from './Footer';

export default class InterPlanetary extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
    // const messagesThunk = fetchMessages(),
    //   channelsThunk = fetchChannels();
    //
    // store.dispatch(messagesThunk);
    // store.dispatch(channelsThunk);
  // }

  render() {
    return (
      <div>
        <Navbar/>
        {/*<Carousel/>*/}
        {/*<Footer/>*/}
      </div>
    )
  }
}