/**
 * Created by praveen on 14/12/2016.
 */

var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.status(200).json({
        "name": "Town Hall",
        "addressLine1": "Cnr Park & George Street",
        "addressLine2": "",
        "country": "Australia",
        "division": "SUPERMARKETS",
        "email": "1248TownHall@woolworths.com.au",
        "extra1": "NSW / ACT",
        "extra2": "407",
        "extra3": "",
        "extra4": "",
        "extra5": "",
        "extra6": "",
        "extra7": "",
        "extra8": "",
        "extra9": "",
        "facilities": [
            "EziBuy Online Order Collection",
            "ATM",
            "Click and Collect",
            "Sushi Bar",
            "eBay Online Order Collection"
        ],
        "geoLevel": "0",
        "GMTZone": "11:0",
        "images": {
            "small": "http://static.mobile-api.woolworths.com.au/badges/mapiconSUPERMARKETSsml.png",
            "large": "http://static.mobile-api.woolworths.com.au/badges/mapiconSUPERMARKETSlge.png"
        },
        "manager": "Evan Wilson",
        "no": "1248",
        "phone": "(02) 8565 9275",
        "postcode": "2000",
        "state": "NSW",
        "suburb": "Sydney",
        "trading_hours": {
            "2017-01-10T00:00:00.000Z": "6:00 AM - 12:00 AM",
            "2017-01-11T00:00:00.000Z": "6:00 AM - 12:00 AM",
            "2017-01-12T00:00:00.000Z": "6:00 AM - 12:00 AM",
            "2017-01-13T00:00:00.000Z": "6:00 AM - 12:00 AM",
            "2017-01-14T00:00:00.000Z": "7:00 AM - 12:00 AM",
            "2017-01-15T00:00:00.000Z": "8:00 AM - 12:00 AM",
            "2017-01-16T00:00:00.000Z": "6:00 AM - 12:00 AM",
            "2017-01-17T00:00:00.000Z": "6:00 AM - 12:00 AM"
        },
        "latitude": "-33.87304498",
        "longtitude": "151.207038"
    });
});

module.exports=router;