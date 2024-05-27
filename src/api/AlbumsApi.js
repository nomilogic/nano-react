import Config from '../../serverConfig';
import {post, get} from 'axios';

export function list(token) {
  const url = 'https://rallycoding.herokuapp.com/api/music_albums';
  // const url = Config.SERVICE_URL + '/users/list';
  // console.log('url',url);
  return get(url);
}
