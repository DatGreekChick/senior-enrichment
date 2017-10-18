import axios from 'axios';

const GET_TEACHERS = 'GET_TEACHERS',
      GET_TEACHER = 'GET_TEACHER';

export const getTeachers = teachers => {
  return { type: GET_TEACHERS, teachers }
};

export const getTeacher = teacher => {
  return { type: GET_CAMPUS, teacher }
};

export const fetchCampuses = () => dispatch => {
  return axios.get('/api/teachers')
    .then(res => res.data)
    .then(teachers => dispatch(getTeachers(teachers)));
};

export const postTeacher = (teacher, history) => dispatch => {
  return axios.post('/api/teachers', teacher)
    .then(res => res.data)
    .then(newTeacher => {
      dispatch(getTeacher(newTeacher));
      history.push(`/teachers/${newTeacher.id}`);
    });
};

const teachers = (state = [], action) => {
  switch (action.type) {
    case GET_TEACHERS:
      return action.teachers;

    case GET_TEACHER:
      return [...state, action.teacher];

    default: return state;
  }
};

export default teachers;