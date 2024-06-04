import Config from '../../serverConfig';
import {post as _post, get as _get} from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// Helper function to get token and set headers
async function loadUserData() {
  return new Promise(async (res, rej) => {
    var UserData = await AsyncStorage.getItem('userData');
    if (UserData) res(JSON.parse(UserData));
    else res(null);
  });
}

export async function get()
{
  const headers= await attachHeaders();
  console.log(headers);
  return _get(...arguments, headers);
}
export async function post()
{
  const headers= await attachHeaders();
  return _post(...arguments, headers);
}
async function attachHeaders() {
  const userData = await loadUserData();
  console.log(userData,"log")
  if (userData) {
    const token = userData.jwtToken;

    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return {headers};
  } else {
    return {};
  }
}

export async function login(token) {
  const url = 'http://qanp-api.nanodot.us/nanotask/user/login';
  return post(url, token);
}

export async function signUp(token) {
  const url = 'http://qanp-api.nanodot.us/nanotask/user/signup';
  return post(url, token);
}

export async function addUdid(id) {
  const url = `http://qanp-api.nanodot.us/nanotask/user/add?uuid=${id}`;
  return get(url);
}

export async function getServers() {
  const url = Config.SERVICE_URL;

  get(url)
    .then(async (res) => {
      if (res.status === 200) {
        let {
          nanotask,
          nanocontent,
          nanonf,
          nanosrv,
          nanosocket,
          store,
          scouts,
          androidVersion,
          iosVersion,
          news,
        } = res.data;

        // Decrypt and store in AsyncStorage (commented out decryption for now)
        // let natask = aes256.decrypt(key, nanotask);
        // let nacontent = aes256.decrypt(key, nanocontent);
        // let nanf = aes256.decrypt(key, nanonf);
        // let nasrv = aes256.decrypt(key, nanosrv);
        // let nanosckt = aes256.decrypt(key, nanosocket);
        // let storeUrl = aes256.decrypt(key, store);
        // let globalNewsUrl = aes256.decrypt(key, news);
        // let scoutsUrl = aes256.decrypt(key, scouts);

        // await AsyncStorage.setItem('taskServer', natask);
        // await AsyncStorage.setItem('contentServer', nacontent);
        // await AsyncStorage.setItem('feedServer', nanf);
        // await AsyncStorage.setItem('serviceServer', nasrv);
        // await AsyncStorage.setItem('socketServer', nanosckt);
        // await AsyncStorage.setItem('storeUrl', storeUrl);
        // await AsyncStorage.setItem('scoutsUrl', scoutsUrl);
        // await AsyncStorage.setItem('gNewsUrl', globalNewsUrl);
      }
    })
    .catch((error) => {
      throw error;
    });
}

export async function getNanoTaskList(uid) {
  const url = `http://qanp-api.nanodot.us/nanotask/combined/v2/getall?id=${uid}`;
  return get(url);
}

export async function getNanoTask(tid) {
  const url = `http://qanp-api.nanodot.us/nanotask/task/get/${tid}`;
  return get(url);
}

export async function getNanoTaskImages(tName) {
  const url = `https://qanp-api.nanodot.us/nanotask/v2/task/${tName}/getall`;
  return get(url);
}
