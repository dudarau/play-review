export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload,
        index: action.index + 1,
      };
    default:
      return state
  }
}