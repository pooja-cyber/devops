/**
 * Created by praveen on 10/01/2017.
 */



var crypto = require('crypto');
var request = require("request");
var data = require('./testData.json');
var Ajv = require('ajv');
var ajv = Ajv({allErrors: true});
jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

var jsonResponse;



var slByStoreDetailApi = {
    url:data.dev.myUrl,
    qs:{},
    method:'GET',
    headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache'
    }
};




var slByDetailSchema = require('./store-schema/storeLocatorByStoreDetailSchema.json');



describe("To validate Store locator by,",function () {

    describe("Store detail Api,",function () {

        it("it should fetch 200 OK http status code", function (done) {
            request(slByStoreDetailApi, function (error, response, body) {
                jsonResponse = JSON.parse(body);
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("it should pass the Json schema validation", function (done) {
            expect(schemaValidation(slByDetailSchema,jsonResponse)).toBe('No errors');
            done();
        });
    });



});



function schemaValidation(schema,jsonRes) {
    var errMsg="No errors";
    var validate = ajv.compile(schema);
    var valid = validate(jsonRes);
    if(!valid){
        errMsg="";
        var error= ajv.errorsText(validate.errors);
        var errorMsg=error.split(',');
        for(var i=0;i<errorMsg.length;i++){
            errMsg=errMsg+errorMsg[i]+'\n';
        }
    }
    return errMsg;
}
