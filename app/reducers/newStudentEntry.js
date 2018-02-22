const CREATE_STUDENT = 'CREATE_STUDENT'
    , WRITE_STUDENT_NAME = 'WRITE_STUDENT_NAME'

export const createStudent = student => ({
  type: CREATE_STUDENT, student
})

export const writeStudentName = studentName => ({
  type: WRITE_STUDENT_NAME, studentName
})

const newStudentEntry = (state = '', action) => {
  switch (action.type) {
    case CREATE_STUDENT:
      return action.student

    case WRITE_STUDENT_NAME:
      return action.studentName

    default: return state
  }
}

export default newStudentEntry