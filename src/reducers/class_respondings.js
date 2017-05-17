function class_respondings (state = [], action) {
  switch (action.type) {
    case 'ADD_CLASS_RESPONSE':
      var newResponse = {
        id: action.id,
        company: action.company,
        student: action.student,
        mssv: action.mssv,
        responding: action.responding,
        class_name: action.class_name
      }
      return state.concat(newResponse);
    default:
      return state;
  }
}

export default class_respondings;