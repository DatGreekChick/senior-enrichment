const CREATE_TEACHER = 'CREATE_TEACHER'

export const createTeacher = teacher => ({
  type: CREATE_TEACHER, teacher
})

const newTeacherEntry = (state = '', action) => {
  switch (action.type) {
    case CREATE_TEACHER:
      return action.teacher

    default: return state
  }
}

export default newTeacherEntry