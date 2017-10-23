const CREATE_STUDENT = 'CREATE_STUDENT';

export const createStudent = student => ({
  type: CREATE_STUDENT, student
});

const newStudentEntry = (state = '', action) => {
  switch (action.type) {
    case CREATE_STUDENT:
      return action.student;

    default: return state;
  }
};

export default newStudentEntry