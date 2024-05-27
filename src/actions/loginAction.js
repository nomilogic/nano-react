import * as loginApi from '../api/loginApi';
import * as Types from '../actions/actionTypes';
import uuid from 'react-native-uuid';
export function loginSuccess(data) {
  return {type: Types.USER_LOGIN, data};
}
export function signUpSuccess(data) {
  return {type: Types.USER_SIGNUP, data};
}

export function login(obj) {
  return (dispatch) => {
    return loginApi.login(obj).then((result) => {
      // console.log('result from::', result.data);
      if (result.status == 200) {
        return dispatch(loginSuccess(result.data));
      }
    });
  };
}

export function getServerUrl() {
  return loginApi.getServers();
}
export async function getUdid(id) {
  return loginApi.addUdid(id);
}
export async function signUp(user) {
  // return (dispatch) => {
  return loginApi.signUp(user).then((result) => {
    if (result.data.status == 200) {
      console.log('result from::', result.data);
      console.log('result from::', result.data.msg);
      return result.data;
      // return dispatch(loginSuccess(result.data));
    } else {
      console.log('result.data::', result.data);
      console.log('result.data.msg::', result.data.msg);
      return result.data;
    }
  });
  // };
}

// export function updateRole(value, resultCallback)
// {
//   return (dispatch) => {
//     dispatch(beginAjaxCall());
//     return RoleApi.update(Types.token, value)
//         .then((result) => {
//           if(result.data.data)
//           {
//             dispatch(updateSuccess(result.data.data));
//             resultCallback(true);
//           } else {
//             resultCallback(false);
//           }
//         });
//   };
// }

// export function login(obj) {
//   return dispatch => {
//     return loginApi.login(obj).then(result => {
//       console.log('result', result)
//       if (result.status == 200) {
//         return dispatch(loginSuccess(result.data));
//       }
//     });
//   };
// }
// export function loadCourses() {
//   return function (dispatch) {
//     return courseApi.getAllCourses(types.token).then(
//         result =>{
//           return dispatch(loadCoursesSuccess(result.data.data));
//         }
//     ).catch(error =>{
//       throw (error);
//     });
//   };
// }
