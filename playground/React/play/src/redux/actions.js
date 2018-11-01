export const simpleAction = (index) => {
  const thunk = dispatch => dispatch({
    type: 'SIMPLE_ACTION',
    payload: `result_of_simple_action = ${index}`,
    index: index,
  });
  thunk.meta = {
    debounce: {
      time: 2500,
      key: 'SIMPLE_ACTION'
    }
  };
  return thunk;
};