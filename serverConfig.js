// ======================================================
// Copyright © 2016. TIXSEE LLC. All Rights Reserved.
//
//
//
// * This software and associated documentation files (the “Software”) is
//
// * proprietary to Tixsee LLC.
//
// * All rights reserved. The methods and
//
// * techniques described herein are considered trade secrets
//
// * and/or confidential. Reproduction or distribution, in whole
//
// * or in part, is forbidden except by express written permission
//
// * of Tixsee LLC.
//
//     LICENSE RESTRICTIONS
//
// Except as expressly permitted under the License, or unless you have received prior written authorization from Tixsee LLC, you may not use, copy, modify, merge, publish, distribute, decompile, disclose, provide, create a derivative work of, or otherwise make available the Software.
//
//     Licenses may not be assigned, encumbered, sublicensed or transferred (whether directly or by operation of law) by the Licensee to any third party, and the Licensee will not grant any license, concession or other rights in or to any one or more of the Licenses to any third party.
//
//     /* See the file "LICENSE" for the full license governing this Software. */
//
//     The above copyright notice and this license notice shall be included in all copies or substantial portions of the Software.
//
// =============================================
// http://localhost:3000/api/services/v1
// https://servprod.tixsee.com/api/services/v1
// https://dev2.tixsee.com/api/services/v1
module.exports = {
  SERVICE_URL:
    process.env.SERVICE_URL === undefined
      ? 'https://media.nanodot.us/nano/json/nano_stage_v1.8.json'
      : process.env.SERVICE_URL,
  GOOGLE_API_KEY: 'AIzaSyCQ_g14OfzLkLOD6MGp4iJPuau2mbnjwvw',
  AES_KEY: 'w1ttsGr0up1',
  FIRE_BASE_CONFIG: {
    apiKey: 'AIzaSyD4dHv8yhXXJ4f327pU2UNeZbF51FY-uhc',
    authDomain: 'nano-8302b.firebaseapp.com',
    databaseURL: 'https://nano-8302b.firebaseio.com',
    projectId: 'nano-8302b',
    storageBucket: 'nano-8302b.appspot.com',
    messagingSenderId: '829128185688',
    appId: '1:829128185688:android:7caa042c36c13f37',
    measurementId: 'G-measurement-id',
  },
};
