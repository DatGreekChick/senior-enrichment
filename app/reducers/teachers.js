import axios from 'axios';

const GET_TEACHERS = 'GET_TEACHERS',
      GET_TEACHER = 'GET_TEACHER';

export const getTeachers = teachers => ({
  type: GET_TEACHERS, teachers
});

export const getTeacher = teacher => ({
  type: GET_TEACHER, teacher
});

export const fetchTeachers = () => dispatch => {
  return axios.get('/api/teachers')
    .then(res => res.data)
    .then(teachers => dispatch(getTeachers(teachers)))
    .catch(err => console.error(err));
};

export const fetchTeacher = teacherId => dispatch => {
  return axios.get(`/api/teachers/${teacherId}`)
    .then(res => res.data)
    .then(teacher => dispatch(getTeacher(teacher)))
    .catch(err => console.error(err));
};

export const postTeacher = (teacher, history) => dispatch => {
  return axios.post('/api/teachers', teacher)
    .then(res => res.data)
    .then(newTeacher => {
      dispatch(getTeacher(newTeacher));
      history.push(`/teachers/${newTeacher.id}`);
    })
    .catch(err => console.error(err));
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