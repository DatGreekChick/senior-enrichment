import React from 'react';
import { connect } from 'react-redux';
import Teacher from './Teacher';
import { fetchTeachers } from "../reducers/teachers";

const Teachers = props => {
  const { teachers } = props;

  return <div>
    <h2 className="section-title">Our Teachers</h2>
    <div className="button-div"><button>Become a Teacher</button></div>
    <ul className="media-list">
      { teachers.map(teacher => <Teacher teacher={teacher}
                                         key={teacher.id} />) }
    </ul>
  </div>
};

const mapStateToProps = (state, ownProps) => ({
  teachers: state.teachers
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTeachers() {
      dispatch(fetchTeachers);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teachers);