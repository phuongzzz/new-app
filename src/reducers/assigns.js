function assigns (state = [], action) {
  switch (action.type) {
    case 'ADD_TO_ASSIGN':
      return state.concat(action.topic);
    default:
      return state;
  }
}

export default assigns;