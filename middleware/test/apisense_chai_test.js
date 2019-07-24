
var assert = require("chai").assert;
var middleware = require("../index")
var http = require('http')
var express = require("express");
var app = express();


describe("Tests for middleware integration: ", function () {

    it("The middleware function is returned as expected", function () {
        assert.typeOf(middleware, 'function', 'The middleware function is returned properly')
    });

    it("Service creation implementing the APISense middleware: ", function (done) {
        app.use(middleware())
        app.get("/test", function (req, res) {
            res.status(200).send("Test OK");
        });
        http.createServer(app).listen(25555, function () {
            assert.isOk('OK', 'The service is correctly created');
            done()
        });

    });

    it("The service endpoint is accesible.", function (done) {
        this.timeout(10000);
        http.get('http://localhost:25555/test', function (res) {
            res.on('data', function (data) {
                assert.equal(200, res.statusCode, "El endpoint devuelve un codigo de estado 200");
                done();
            });
            
        });
    })
})

describe("Test for new endpoint of APISense:", function () {
    it("APISense endpoint is working properly.", function (done) {
        http.get('http://localhost:25555/apisense/data', function (res) {
            res.on('data', function(chunk){
                assert.equal(200, res.statusCode, "El endpoint devuelve un codigo de estado 200");
                done()
            });
    })
    })
})

describe("Check data is correctly stored in Database", function () {

    it("Request data was stored properly and is accesible", function (done) {
        setTimeout(function () { //Should wait 6 seconds because the data it stored every 5 seconds in the DB.
            http.get('http://localhost:25555/apisense/data', function (res) {
                var body = '';
                res.on('data', function(chunk){
                    body += chunk;
                });
                res.on('end', function(){
                    var response = JSON.parse(body);
                    assert.isOk(response.length > 0, "Por lo menos debe de existir un dato dentro de la respuesta")
                    assert.isOk(response.find(x=> { return (x.dataType == "Request-Received" && x.data.url == "/test")}), "Existe el dato de la petición en la Base de datos")
                });
            done();
        });
        }, 6000)
    })



});

