import React from 'react'
import { connect } from 'react-redux'
import Campus from './Campus'
import { fetchCampuses } from "../reducers/campuses"

const Campuses = ({ campuses }) => <div>
  <h2 className="section-title">OUR CAMPUSES</h2>
  <div className="button-div"><button>Add a Campus</button></div>
  <ul className="media-list">
    { campuses.map(campus => <Campus campus={campus} key={campus.id}/>) }
  </ul>
</div>

const mapStateToProps = ({ campuses }) => ({ campuses })

const mapDispatchToProps = dispatch => ({
  fetchCampuses() {
    dispatch(fetchCampuses)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses)