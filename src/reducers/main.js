import Actions from '../actions';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.DISCARD_MATCH:
      return INITIAL_STATE;
    default:
      return state;
  }
};
