import React from 'react';
import { connect } from 'react-redux';
import Campus from './Campus';
import { fetchCampuses } from "../reducers/campuses";

const Campuses = props => {
  console.log('props:',props);
  const { campuses } = props;

  return <div>
    <h2 className="section-title">Our Campuses</h2>
    <div className="button-div"><button>Add a Campus</button></div>
    <ul className="media-list">
      { campuses.map(campus => <Campuses campus={campus}
                                         key={campus.id} />) }
    </ul>
  </div>
};

const mapStateToProps = (state, ownProps) => ({
  campuses: state.campuses
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses() {
      dispatch(fetchCampuses);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);