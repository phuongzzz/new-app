function cvs (state = [], action) {
  switch (action.type) {
    case 'ADD_CV':
      var newCV = {
        id: action.id,
        name: action.name,
        position: action.position,
        dateofbirth: action.dateofbirth,
        gender: action.gender,
        phone: action.phone,
        email: action.email,
        address: action.address,
        year_start: action.year_start,
        year_stop: action.year_stop,
        grade: action.grade,
        school: action.school,
        major: action.major,
        cpa: action.cpa,
        more_information: action.more_information,
        majorskill: action.majorskill,
        majorskill_level: action.majorskill_level,
        otherskill: action.otherskill,
        otherskill_level: action.otherskill_level,
        desitination: action.destination
      }
      return state.concat(newCV);
    default:
      return state;
  }
}

export default cvs;