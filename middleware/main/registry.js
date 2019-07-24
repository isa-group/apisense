const fs = require('fs');
const config = require('../config')
const http = require('http')
var stream;
if (config.storeInFile){
fs.createWriteStream(config.logFile, { flags: 'a' });
}
var dataToSend = [];

var traceSignature = config.traceSignature; // <- Here is concatenated the sessionId, transactionId, and executionId, to name a function. 
module.exports.traceSignature = traceSignature;

/**
 * @module Registry
 */


module.exports.getUIDsFromTrace = getUIDsFromTrace;
/** Get the Identifiers of the request that caused the current execution from Javascript stacktrace
 * @return {Object} A object that contains all the unique identifiers
 */
var getUIDsFromTrace = function () {
  var UID = ""
  var obj = {};
  Error.captureStackTrace(obj, getUIDsFromTrace); 
  var trace = obj.stack;
  var indexUID = trace.indexOf(traceSignature)
  if (indexUID > -1) {
    var indexPoint = trace.indexOf(" ", indexUID);
    UID = trace.slice(indexUID + traceSignature.length, indexPoint) //Remove functionName and get only the UIDS
  }
  var arrayUIDs = UID.split("$")
  var uids = {
    sid: arrayUIDs[0],
    tid: arrayUIDs[1],
    eid: arrayUIDs[2],
  }
  return uids;
};


module.exports.registerData = registerData
/** Store the data for the UIDS that are currently in the stacktrace
 * @param {Integer} timestamp Config of the APISense middleware
 * @param {String} dataType Type of data stored
 * @param {Object} timestamp Object that contains all the data to be stored
 * @return {}
 */
function registerData(timestamp, dataType, data) {
  return registerDataUIDs(getUIDsFromTrace(), timestamp, dataType, data);
}



module.exports.registerDataUIDs = registerDataUIDs
/** Store data with custom UIDs
 * @param {Object} uids Object that contains all the uids: sid,tid,eid
 * @param {Integer} timestamp Config of the APISense middleware
 * @param {String} dataType Type of data stored
 * @param {Object} timestamp Object that contains all the data to be stored
 * @return {}
 */
function registerDataUIDs(uids, timestamp, dataType, data) {
  var entry = {
    sid: uids.sid,
    tid: uids.tid,
    eid: uids.eid,
    timestamp: timestamp,
    dataType: dataType,
    data: data,
  }
  if (config.storeInFile){
    stream.write(JSON.stringify(entry) + "\n")
  }
  if (config.storeInServer){
    dataToSend.push(entry)
  }
}

/** Starts the function that stores the data in the database
 * @private
 * @return {}
 */
module.exports.createStoreTask = function(){
  setInterval(() => {
    const options = {
      path: '/apisense/data',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const req = http.request(config.server, options, (res) => {
     // console.log(`statusCode: ${res.statusCode}`)
      res.on('data', (d) => {
        process.stdout.write(d)
      })
    })
    
    req.on('error', (error) => {
      console.error(error)
    })
    
    req.write(JSON.stringify(dataToSend))
    req.end()

    dataToSend = [];
  
  }, config.storeEvery);


}