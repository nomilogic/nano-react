import Config from '../../serverConfig';
import {post, get} from 'axios';
// import aes256 from 'aes256';
// import AES from 'crypto-js/aes';
// var AES = require('crypto-js/aes');
// var aes256 = require('nodejs-aes256');
import AsyncStorage from '@react-native-community/async-storage';

export function login(token) {
  const url = 'http://qanp-api.nanodot.us/nanotask/user/login';
  // const url = Config.SERVICE_URL + '/users/list';
  return post(url, token);
}


export function signUp(token) {
  console.log('token:', token);
  const url = 'http://qanp-api.nanodot.us/nanotask/user/signup';
  // const url = Config.SERVICE_URL + '/users/list';
  return post(url, token);
}

export function addUdid(id) {
  let obj = {
    uuid: id,
  };
  console.log('API---');
  const url = 'http://qanp-api.nanodot.us/nanotask/user/add?uuid=' + id;
  console.log('========', url);
  return get(url);
}

export function getServers() {
  var key = Config.AES_KEY;
  get(Config.SERVICE_URL)
    .then(async (res) => {
      if (res.status == 200) {
        console.log('200', res);
        let nanotask = res.nanotask;
        let nanocontent = res.nanocontent;
        let nanonf = res.nanonf;
        let nanosrv = res.nanosrv;
        let nanosocket = res.nanosocket;
        let Store = res.store;
        let Scouts = res.scouts;
        let AndroidVersion = res.androidVersion;
        let iosVersion = res.iosVersion;
        let globalNews = res.news;
        // let natask = aes256.decrypt(key, nanotask);
        // let nacontent = aes256.decrypt(key, nanocontent);
        // let nanf = aes256.decrypt(key, nanonf);
        // let nasrv = aes256.decrypt(key, nanosrv);
        // let nanosckt = aes256.decrypt(key, nanosocket);
        // let storeUrl = aes256.decrypt(key, Store);
        // let globlaNewsUrl = aes256.decrypt(key, globalNews);
        // let ScoutsUrl = aes256.decrypt(key, Scouts);
        // await AsyncStorage.setItem('taskServer', natask);
        // await AsyncStorage.setItem('contentServer', nacontent);
        // await AsyncStorage.setItem('feedServer', nanf);
        // await AsyncStorage.setItem('serviceServer', nasrv);
        // await AsyncStorage.setItem('socketServer', nanosckt);
        // await AsyncStorage.setItem('StoreUrl', storeUrl);
        // await AsyncStorage.setItem('ScoutsUrl', ScoutsUrl);
        // await AsyncStorage.setItem('gNewsUrl', globlaNewsUrl);
      }
      //dispatch action
      // resolve(Object.assign({}, response.data.data));
    })
    .catch(function (error) {
      // throw error
      throw error;
    });


}
export function getNanoTaskList(uid) {
  let obj = {
      id : uid,
    };
    console.log(obj,uid,'idd');
  const url = 'http://qanp-api.nanodot.us/nanotask/combined/v2/getall?id=' + uid;
  // const url = Config.SERVICE_URL + '/users/list';
  return get(url);
}
export function getNanoTask(tid) {

  const url = 'http://qanp-api.nanodot.us/nanotask/task/get/' + tid;
  // const url = Config.SERVICE_URL + '/users/list';
  return get(url);
}
export function getNanoTaskImages(tName) {
 //pg=0&sz=30
 console.log(tName,"TNAM")
  const url = 'https://qanp-api.nanodot.us/nanotask/v2/task/' + tName + '/getall';//pg=0&sz=30;
  // const url = Config.SERVICE_URL + '/users/list';
  return get(url);
}
