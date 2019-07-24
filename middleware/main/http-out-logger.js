module.exports.http = httpDebug('http');
module.exports.https = httpDebug('https');
var main = require("./sensor")
function httpDebug(proto) {
    var http = require(proto);
    http.debug = 0
    http.__request = http.request;
    http.request = function httpDebugRequest(options) {
        
        var request = http.__request.apply(http, arguments);
       // console.log("tests")
       // if (!!(http.debug)) {
            // debug messaging for initial request
            console.log("REREC")

            // handle debug messaging for request methods
            request.__write = request.write;
            request.write = function httpDebugWrite(data) {
                console.log("Detected request " + request.length)
                console.log(JSON.stringify(data))
                if (request && !request.savedData){
                    request.savedData = true;
                    console.log("StoringData")
                    main.requestCreated(request)
                }
                return request.__write.apply(request, arguments);
            };

           
            request.__end = request.end;
            request.end = function httpDebugEnd(data) {
               
                console.log("Detected FINrequest " + request.length)
                if (data) {
                //    console.dir(data);
                }
                if (request && !request.savedData){
                    request.savedData = true;
                    console.log("StoringData")
                    main.requestCreated(request)
                }
                return request.__end.apply(request, arguments);
            };

       // }



        return request;

    };

    return http;
}