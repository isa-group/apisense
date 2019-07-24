'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

/**
 * @module Dataserver-Controller
 */

/** Controller for POST requests of the data API, used for store new data in the database
 */
module.exports.logsPOST = function logsPOST (req, res, next) {
  var body = req.body;
  Default.logsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/** Controller for GET request of the data API, used to get the data from the database
 */
module.exports.logsGET = function logsGET (req, res, next) {
  var params = req.query;
  Default.logsGET(params)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
