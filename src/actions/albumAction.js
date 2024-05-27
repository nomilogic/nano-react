import * as AlbumApi from '../api/AlbumsApi';
import * as Types from '../actions/actionTypes';

function listSuccess(data) {
  return {type: Types.LOAD_ALUBM_LIST, data};
}

export function getAllList() {
  return dispatch => {
    return AlbumApi.list().then(result => {
      console.log('result from::', result.data);
      if (result.data) {
        dispatch(listSuccess(result.data));
      }
    });
  };
}
