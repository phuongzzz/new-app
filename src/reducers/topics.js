function topics (state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_TOPIC':
    case 'ADD_TOPIC':
      return state.concat(action.topic);
    case 'REMOVE_TOPIC':
      return state.filter(topic => topic.topic_id !== action.topic_id);
    default:
      return state;
  }
}

export default topics;