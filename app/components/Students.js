import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Student from './Student';
import { fetchStudents } from "../reducers/students";

const Students = ({ students }) => {
  return <div>
    <h2 className="section-title">OUR STUDENTS</h2>
    <Link to='/new-student'>
      <div className="button-div"><button>Become a Student</button></div>
    </Link>
    <ul className="media-list">
      { students.map(student => <Student student={student}
                                          key={student.id} />) }
    </ul>
  </div>
};

const mapStateToProps = (state, ownProps) => ({
  students: state.students
});

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents() {
      dispatch(fetchStudents);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);