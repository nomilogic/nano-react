import * as types from '../actions/actionTypes';

export default function albumReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ALUBM_LIST:
      console.log('reducerstat:', action);
      return action.data;
    default:
      return state;
  }
}
