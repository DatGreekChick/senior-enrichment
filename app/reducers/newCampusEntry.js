const CREATE_CAMPUS = 'CREATE_CAMPUS'

export const createCampus = campus => ({
  type: CREATE_CAMPUS, campus
})

const newCampusEntry = (state = '', action) => {
  switch (action.type) {
    case CREATE_CAMPUS:
      return action.campus

    default: return state
  }
}

export default newCampusEntry