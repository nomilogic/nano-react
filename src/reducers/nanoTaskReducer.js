import * as types from '../actions/actionTypes';

export default function nanoTaskReducer(state = [], action) {
  console.log('ACTION======>>>>>>>>>>>>>>', action);
  switch (action.type) {
    case types.GET_NANO_TASK_LIST:
      return action.data;
    case types.GET_NANO_TASK:
      return action.data;
    default:
      return state;
  }
}
