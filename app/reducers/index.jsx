import { combineReducers } from 'redux';
import students from './students';
import teachers from './teachers';
import campuses from './campuses';

// delete this after all reducers are completed:
// const initialState = {
//   students: [],
//   newStudent: '',
//   teachers: [],
//   newTeacher: '',
//   campuses: [],
//   newCampus: ''
// };

const rootReducer = combineReducers({
  students,
  teachers,
  campuses
});

export default rootReducer

// move this elsewhere - newStudent (?):
// const CREATE_STUDENT = 'CREATE_STUDENT'
// export const createStudent = name => {
//  return { type: CREATE_STUDENT, name };
// };