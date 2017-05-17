function company_respondings (state = [], action) {
  switch (action.type) {
    case 'ADD_COMPANY_RESPONSE':
      var newResponse = {
        id: action.id,
        company: action.company,
        mssv: action.mssv,
        student: action.student,
        responding: action.responding,
      }
      return state.concat(newResponse);
    default:
      return state;
  }
}

export default company_respondings;