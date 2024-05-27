import * as types from '../actions/actionTypes';

export default function loginReducer(state = [], action) {
  console.log('ACTION======>>>>>>>>>>>>>>', action);
  switch (action.type) {
    case types.USER_LOGIN:
      return action.data;
    case types.USER_SIGNUP:
      return action.data;
    case types.USER_RETRIVE:
      return action.data;
    default:
      return state;
  }
}
