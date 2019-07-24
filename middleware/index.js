const sensor = require('./main/sensor')

const config = require('./config')

/** 
 * @module Main
 */


/** Load a config from the object and creates the APISense middleware
 * @param {Object} config Config of the APISense middleware
 * @return {Object} The APISense middleware configurated
 */
function loadMiddlewareWithConfig(configObj) {
    if (configObj) {
        config.assignConfig(configObj)
    }
    return sensor.middleware
}


module.exports = loadMiddlewareWithConfig