import React from 'react';
import { connect } from 'react-redux';
import { createStudent, writeStudentName } from '../reducers/newStudentEntry';
import { postStudent } from '../reducers/students';

const NewStudentEntry = ({ newStudentEntry, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:  </label>
        <input
          value={newStudentEntry}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="studentName"
          placeholder="Enter student name"
        />
      </div>
      <div className="form-group">
        <button type="submit">Create Student</button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  newStudentEntry: state.newStudentEntry
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange (evt) {
      dispatch(writeStudentName(evt.target.value));
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const name = evt.target.studentName.value;
      dispatch(postStudent({ name }, ownProps.history));
      dispatch(writeStudentName(''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudentEntry);