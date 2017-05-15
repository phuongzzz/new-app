function session (state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return sessionStorage.username
    case 'LOG_OUT':
      return {}
  }
  return state;
}

export default session;