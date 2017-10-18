import { combineReducers } from 'redux'

const initialState = {
  students: [],
  teachers: [],
  campuses: []
};

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
