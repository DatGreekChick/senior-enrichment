import React from 'react';
import { connect } from 'react-redux';
import Student from './Student';
import { fetchStudents } from "../reducers/students";

const Students = props => {
  const { students } = props;

  return <div>
    <h2 className="section-title">Our Students</h2>
    <div className="button-div"><button>Become a Student</button></div>
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