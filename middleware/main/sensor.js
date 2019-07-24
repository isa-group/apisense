const express = require('express');
const config = require('../config')
const appName = "APIX"
const registry = require("./registry")
const uuid = require("uuid/v4")
const path = require('path');

/**
 * @module Sensor
 */


var first = false;
/** Main function that process all the incoming requests
 * @param {Object} req Request data
 * @param {Object} res Response data
 * @param {Object} next Function to be executed when finished processing
 * @return {}
 */
module.exports.middleware = function (req, res, next) {
  
  if (!first){
   
  first = true;
  var serverEnd = req.protocol + '://' + req.get('host') 
  req.app.use('/apisense', express.static(path.join(__dirname, '../visualizer')));
  require('../data-server').loadDataServer(req.app)
  config.assignConfig({server: serverEnd})
  console.log(config.appName + ": -- STARTING task to store -- ")
  registry.createStoreTask()	
  console.log(config.appName + ": -- FINISHED creating task --\n  ")
}


if (req.originalUrl.toLowerCase().startsWith("/apisense")){
  next()
  return;
}  
  
  

  var EXECUTION_ID = new Date().getTime() + "_" + uuid().replace(/-/g,"")
  var TRANSACTION_ID;
  var SESSION_ID;
  var sensorHeader = req.get(config.headerUID);
  if (sensorHeader) {
    TRANSACTION_ID = sensorHeader.split("$")[1]
    SESSION_ID = sensorHeader.split("$")[2]
  }
  else {
    TRANSACTION_ID = new Date().getTime() + "_" + uuid().replace(/-/g,"")
    SESSION_ID = new Date().getTime() + "_" + uuid().replace(/-/g,"")
  }
  var uids = {
    eid: EXECUTION_ID,
    tid: TRANSACTION_ID,
    sid: SESSION_ID,
  }

  res.end = (function (write) {
    return function (data) {
      write.apply(res, arguments)
      var responseObject = {
        body: data ? data.toString('utf-8') : "",
        status: res.statusCode ? res.statusCode : "",
        cookies: res.cookies ? res.cookies : "",
        headers: res.getHeaders() ? res.getHeaders() : "",
        timestamp: new Date().getTime()
      }
      registry.registerDataUIDs(uids, new Date().getTime(), "Response-Sent", responseObject)
    }
  })(res.end)

  

  var requestObject = getRequestObject(req)
  res.set(config.headerUID, uids.sid + "$" + uids.tid + "$" + uids.eid); //Set the header to allow the petitions in other services
  registry.registerDataUIDs(uids, new Date().getTime(), "Request-Received", requestObject)
  var nameFunction =  registry.traceSignature + uids.sid + "$" + uids.tid + "$" + uids.eid
  eval("function " + nameFunction + "(){ next() }; " + nameFunction + "();")
}


module.exports.getRequestObject = getRequestObject;
/** Parse a request object to delete undefined properties and add timestamp
 * @param {Object} req Request data
 * @param {Object} req Request data parsed
 */
function getRequestObject(req) {
  return requestObject = {
    ip: req.ip ? req.ip : "",
    url: req.url ? req.url : "",
    method: req.method ? req.method : "",
    body: req.body ? req.body : "",
    cookies: req.cookies ? req.cookies : "",
    headers: req.headers ? req.headers : "",
    timestamp: new Date().getTime()
  }
}

module.exports.requestCreated = requestCreated
function requestCreated(req) {
  var requestObj = getRequestObject(req)
  console.log("Request obj: " + JSON.stringify(req))
  registry.registerData(new Date().getTime(), "Request-Sended", requestObj)
  
}

//MAIN EXECUTION: Modify trace limit, start console listener, start request listener, and response listener
console.log(config.appName + ": -- Modifying trace limit -- ")
Error.stackTraceLimit = Infinity;
console.log(config.appName + ": -- FINISHED modifying trace limit --\n ")


console.log(config.appName + ": -- STARTING console listener -- ")
global.process.stdout.write = (function (write) {
  return function (string, encoding, fd) {
    write.apply(global.process.stdout, arguments)
    registry.registerData(new Date().getTime(), "consoleLog", string)
  }
})(process.stdout.write)
console.log(config.appName + ": -- FINISHED creating console listener --\n  ")

console.log(config.appName + ": -- STARTING requests listener -- ")
//require("./http-out-logger")

console.log(config.appName + ": -- FINISHED creating requests listener --\n  ")




