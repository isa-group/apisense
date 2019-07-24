'use strict';
const bodyParser = require('body-parser')


//app.use(express.static('apisense/src'));
module.exports.loadDataServer = function(app){
 
  app.use("/apisense/data",function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.use("/apisense/data", bodyParser.json({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
  }));
  
  var ctrls = require('./controllers/Default')
  app.get("/apisense/data", ctrls.logsGET)
  app.post("/apisense/data", ctrls.logsPOST)
  
  
}
