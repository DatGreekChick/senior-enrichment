import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from '../store';

import { fetchStudents } from "../reducers/students";
import { fetchCampuses } from "../reducers/campuses";
import { fetchTeachers } from "../reducers/teachers";

import Navbar from './Navbar';
import Footer from './Footer';

import Carousel from './Carousel';
import Students from './Students';
import Teachers from './Teachers';
import Campuses from './Campuses';

export default class Witcher extends Component {
  componentDidMount() {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
    store.dispatch(fetchTeachers());
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Footer/>
        <main>
          <Switch>
            <Route exact path="/" component={Carousel}/>
            <Route exact path="/students"
                   component={Students} />
            <Route exact path="/campuses"
                   component={Campuses} />
            <Route exact path="/teachers"
                   component={Teachers} />
            {/*<Redirect to="/" />*/}
          </Switch>
        </main>
      </div>
    )
  }
}