function notifications (state = [], action) {
  switch (action.type) {
    case 'PUSH_NOTI_ADMIN':
      return state.concat(action.noti_obj);
    default:
      return state;
  }
}

export default notifications;