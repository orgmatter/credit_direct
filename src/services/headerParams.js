//import { sha256 } from 'react-native-sha256';
//import base64 from 'react-native-base64';

// require the buffer
var Buffer = require('buffer/').Buffer;

// require the crypto hmac-sha256 file
var CryptoJS = require("crypto-js");

// require the unique id library
var uuid = require('uuidv4');

//generate the unique key id or nonce
const genNonce = () => {
    var nonce = uuid();
    nonce = nonce.replace(/-|\s/g,"");
    return nonce;
}

// generate the unix timestamp function;
const genTimestamp = () => {
    var unixTimestamp;
    unixTimestamp = Math.floor((Date.now() / 1000));
    return unixTimestamp;
}

// generate encode uri function for get
const genUriEncodeGet = (data, uri) => {
    var uriEncodeStr;
    var uriStr = uri+data;
    uriEncodeStr = encodeURIComponent(uriStr);
    return uriEncodeStr.toLowerCase();
}

// generate encode uri function for post
const genUriEncodePost = (uri) => {
    var uriEncodeStr;
    var uriStr = uri;
    uriEncodeStr = encodeURIComponent(uriStr);
    return uriEncodeStr.toLowerCase();
}

// encode payload to base64 function
const genEncodePayload = (data) => {
    var payloadObj;
    var payload = Buffer(JSON.stringify(data));
    payloadObj = Buffer.from(payload).toString("base64");
    return payloadObj;
}

// getting the app id
const getAppId = () => {
    var app_id = 'mob_user_tmapt:';
    return app_id;
}

// getting the app key
const getAppKey = () => {
    var app_key = '9BEE43889941402AA284E237EE1BB207';
    return app_key;
}

// hash computation function
const headerParams = (data, methodType, uri, queryParams, dataStatus, isQuery) => {
    console.log(data);
    // console.log(queryParams);
    var empty = '';
    var concatParams;
    var encodedUri;
    var encodedPayload;
    // if (data != empty){
    //     var encodedPayload = genEncodePayload(data);
    // }
    var nonce = genNonce();
    var unixTimestamp = genTimestamp();

    if ((methodType == 'GET') && (dataStatus == true) && (isQuery == false)) {
        encodedUri = genUriEncodeGet(data, uri);
        concatParams = methodType+unixTimestamp+encodedUri+nonce;
    }else if ((methodType == 'GET') && (dataStatus == false) && (isQuery == false)) {
        encodedUri = genUriEncodeGet(empty, uri);
        concatParams = methodType+unixTimestamp+encodedUri+nonce;
    }else if ((methodType == 'GET') && (dataStatus == true) && (isQuery == true)) {
        encodedUri = genUriEncodeGet(data, uri);
        concatParams = methodType+unixTimestamp+encodedUri+nonce+queryParams;
        // console.log('get query params: '+queryParams);
        // console.log('get concat params: '+concatParams);
    } else if ((methodType == 'POST')) {
        encodedUri = genUriEncodePost(uri);
        encodedPayload = genEncodePayload(data);
        concatParams = methodType+unixTimestamp+encodedUri+nonce+encodedPayload;
    }
    //var genHash = CryptoJS.HmacSHA256(concatParams, appKey()).toString();
    var genHash = CryptoJS.HmacSHA256(concatParams, getAppKey()).toString();
    //var decGenHash = CryptoJS.AES.decrypt(genHash, appKey());
    //var decGenHashText = decGenHash.toString(CryptoJS.enc.Utf8);
        // console.log('concat params: '+concatParams);
    return {
        genHashed: genHash.toUpperCase(),
        nonce,
        unixTimestamp,
        appId: getAppId(),
        concatParams
    };

}
export default headerParams;