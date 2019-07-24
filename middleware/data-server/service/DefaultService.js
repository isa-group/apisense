'use strict';

var Datastore = require('nedb')
var db = new Datastore();

/**
 * @module Dataserver-Service
 */

  
/** Store a new document in the database
 * @param {Object} body Document to be stored in the database
 * @return {Object} Result of the operation
 */
exports.logsPOST = function (body) {
  return new Promise(function (resolve, reject) {
    db.insert(body, function () { })
    for (var log of body) {

      //console.log(log)
    }

    resolve();
  });
}

/** Get documents from the database
 * @param {Object} params Filter to search documents
 * @return {Array} List of matchings documents
 */
exports.logsGET = function (params) {

  var formatedParams = {};

  Object.keys(params).forEach(x => {
    var finalVal = params[x].value;
    if (finalVal) {
      formatedParams[x] = finalVal;
    }
  });


  if (formatedParams.search) {
    formatedParams.data = new RegExp('^' + formatedParams.search + '$', "i")
    delete formatedParams.search;
  }

  var orQuery;
  if (formatedParams.anyId) {
    console.log(formatedParams.anyId)
    var reg = new RegExp('^' + formatedParams.anyId + '$', "i");
    console.log(reg)
    orQuery = [{ sid: { $regex: '.*' + formatedParams.anyId + '.*' } }, { eid: { $regex: '.*' + formatedParams.anyId + '.*' } }, { tid: { $regex: '.*' + formatedParams.anyId + '.*' } }]
    delete formatedParams.anyId;
  }

  return new Promise(function (resolve, reject) {


    var query = db.find(formatedParams)


    if (orQuery) {
      query.or(orQuery)
    }

    query.exec(function (err, docs) {
      if (err) {

        resolve(err)
      }
      else {
        resolve(docs)
      }
    })



  });
}

