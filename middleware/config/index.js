var jsyaml = require('js-yaml');
const fs = require('fs');
const path = require("path");

var configString = fs.readFileSync(path.resolve(__dirname, "./config.yaml"));
var config = jsyaml.safeLoad(configString);

/**
 * @module Config
 */

/** Apply new config properties to the current config
 * @param {Object} config Config object with the desired properties to add in the config
 * @return {Object} The final config with the changes applied
 */
function assignConfig(configOverride) {
    if (configOverride) {
        Object.assign(config, configOverride)
    }
    return config;
}

module.exports = config;

module.exports.assignConfig = assignConfig;
