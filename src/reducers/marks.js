function marks (state = [], action) {
  switch (action.type) {
    case 'CHANGE_MARK':
      return state.map((mark) => mark.id !== action.mark.markId
        ? mark :  Object.assign({}, mark, {
            CSTT: action.mark.cstt,
            timechecking: action.mark.timechecking,
            report: action.mark.report,
            demo: action.mark.demo,
            material: action.mark.material,
            GPA: action.mark.gpa,
            Result: action.mark.result
          }))
    default:
      return state;
  }
}

export default marks;