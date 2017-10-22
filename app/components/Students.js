import React from 'react';
import { connect } from 'react-redux';
import Student from './Student';
import { fetchStudents } from "../reducers/students";

const Students = props => {
  const { students } = props;

  return <div>
    <ul className="media-list">
      { students.map(student => <Student student={student}
                                          key={student.id} />) }
    </ul>
  </div>
};

const mapStateToProps = (state, ownProps) => {
  // const studentId = +ownProps.match.params.id;

  return {
    // student: state.students.find(student => {
    //   return student.id === studentId || { name: '' }
    // }),
    students: state.students,
    // studentId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents() {
      dispatch(fetchStudents());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);