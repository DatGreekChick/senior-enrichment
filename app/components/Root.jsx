import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

import Carousel from './Carousel';
import Students from './Students';
import Teachers from './Teachers';
import Campuses from './Campuses';

export default class Witcher extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Footer/>
        <main>
          <Switch>
            <Route exact path="/" component={Carousel}/>
            <Route path="/students"
                   component={Students} />
            <Route path="/campuses"
                   component={Campuses} />
            <Route path="/teachers"
                   component={Teachers} />
            {/*<Redirect to="/" />*/}
          </Switch>
        </main>
      </div>
    )
  }
}