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
import Student from './Student';
import NewStudentEntry from "./NewStudentEntry";

import Teachers from './Teachers';

import Campuses from './Campuses';
import newStudentEntry from "../reducers/newStudentEntry";

export default class Witcher extends Component {
  componentDidMount() {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
    store.dispatch(fetchTeachers());
    store.dispatch(newStudentEntry());
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
                   component={Students}/>
            <Route exact path="students/:studentId" component={Student} />
            <Route exact path="/new-student" component={NewStudentEntry}/>
            <Route exact path="/campuses"
                   component={Campuses}/>
            <Route exact path="/teachers"
                   component={Teachers}/>
            <Redirect to="/"/>
          </Switch>
        </main>
      </div>
    )
  }
}