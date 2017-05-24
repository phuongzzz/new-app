function session (state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return sessionStorage.role
    case 'LOG_OUT':
      return {}
    default:
      return state;
  }
}

export default session;