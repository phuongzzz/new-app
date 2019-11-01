function reports (state = [], action) {
  switch (action.type) {
    case 'ADD_REPORT':
      var newReport = {
        id: action.id,
        student_id: action.student_id,
        name: action.name,
        link: action.link
      }
      return state.concat(newReport);
    default:
      return state;
  }
}

export default reports;