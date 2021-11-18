var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.json(
        {'propertyTypes':[
            {'type': 'Office', 'typeId': 0},
            {'type': 'Land', 'typeId': 1},
            {'type': 'Residential', 'typeId': 2},
        ]
        })});

module.exports = router;