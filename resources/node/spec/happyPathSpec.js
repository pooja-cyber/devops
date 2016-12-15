/**
 * Created by praveen on 14/12/2016.
 */

var request = require('request');
var base_url="https://praviii7-test.apigee.net/v1/devops";
var json;

var options = {
    url: base_url,
    qs:{},
    method:'GET',
    headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache'
    }
};
describe("To validate API",function () {
   it("it should 200 OK http status code",function (done) {
       request(options,function (error,response,body) {
           expect(response.statusCode).toBe(200);
           done();
       });
   });
});