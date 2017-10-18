import { combineReducers } from 'redux';
import students from './students';
import teachers from './teachers';
import campuses from './campuses';

// should I add a currentCampus...?
// should I add reducers to update all categories...?
const rootReducer = combineReducers({
  students,
  newStudentEntry,
  teachers,
  newTeacherEntry,
  campuses,
  newCampusEntry
});

export default rootReducer