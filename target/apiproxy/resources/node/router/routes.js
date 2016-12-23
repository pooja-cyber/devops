/**
 * Created by praveen on 14/12/2016.
 */

var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.status(200).json({"status":"Hello world ! I'm sending you a Christmas Gift!!!"});
});

module.exports=router;