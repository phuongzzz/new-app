function registered_topics (state = [], action) {
  switch (action.type) {
    case 'ADD_TO_REGISTER':
      return state.concat(action.topic);
    case 'REMOVE_FROM_REGISTER':
      return state.filter(topic => topic.topic_id !== action.topic_id);
    default:
      return state;
  }
}

export default registered_topics;