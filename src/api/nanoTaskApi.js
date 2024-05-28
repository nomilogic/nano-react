import Config from '../../serverConfig';
import {post, get} from 'axios';
// import aes256 from 'aes256';
// import AES from 'crypto-js/aes';
// var AES = require('crypto-js/aes');
// var aes256 = require('nodejs-aes256');
import AsyncStorage from '@react-native-community/async-storage';


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

export function uploadNanoImage(obj) {
  
 //  console.log(obj,'idd');
  const url = 'http://qanp-api.nanodot.us/zuul/uploader/nanotask/user/upload';
  //const url = Config.SERVICE_URL + '/users/list';
  return post(url, obj);

  }
export function addActivity(obj) {
  
  console.log(obj,'activity Object');
  const url = 'http://qanp-api.nanodot.us/nanotask/nanotaskactivity/add';
  //const url = Config.SERVICE_URL + '/users/list';
  return post(url, obj);

  }
