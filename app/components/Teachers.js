import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Teacher from './Teacher'
import { fetchTeachers } from '../reducers/teachers'

const Teachers = ({ teachers }) => <div>
  <h2 className="section-title">OUR TEACHERS</h2>
  <div className="button-div"><button>Become a Teacher</button></div>
  <ul className="media-list">
    { teachers.map(teacher => <Teacher teacher={teacher} key={teacher.id} />) }
  </ul>
</div>

const mapStateToProps = ({ teachers }) => ({ teachers })

const mapDispatchToProps = dispatch => ({
    fetchTeachers() {
      dispatch(fetchTeachers)
    }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Teachers))