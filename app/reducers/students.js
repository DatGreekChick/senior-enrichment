import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS',
      GET_STUDENT = 'GET_STUDENT';

export const getStudents = students => {
  return { type: GET_STUDENTS, students }
};

export const getStudent = student => {
  return { type: GET_STUDENT, student }
};

export const fetchStudents = () => dispatch => {
  return axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(getStudents(students)));
};

export const postStudent = (student, history) => dispatch => {
  return axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(getStudent(newStudent));
      history.push(`/students/${newStudent.id}`);
    });
};

const students = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT:
      return [...state, action.student];

    default: return state;
  }
};

export default students;