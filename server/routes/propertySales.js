var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.json(
        {'propertySales':[
            {'saleId':0, 'propertyTypeId': 0, 'agentId': 0, 'date': '2015-01-01'},
            {'saleId':1, 'propertyTypeId': 1, 'agentId': 0, 'date': '2015-01-02'},
            {'saleId':2, 'propertyTypeId': 2, 'agentId': 0, 'date': '2015-01-03'},
            {'saleId':3, 'propertyTypeId': 0, 'agentId': 0, 'date': '2015-01-06'},
            {'saleId':4, 'propertyTypeId': 0, 'agentId': 0, 'date': '2015-01-06'},
            {'saleId':5, 'propertyTypeId': 1, 'agentId': 0, 'date': '2015-01-07'},
            {'saleId':6, 'propertyTypeId': 1, 'agentId': 0, 'date': '2015-01-07'},
            {'saleId':7, 'propertyTypeId': 2, 'agentId': 0, 'date': '2015-01-07'},
            {'saleId':8, 'propertyTypeId': 2, 'agentId': 0, 'date': '2015-01-08'},
            {'saleId':9, 'propertyTypeId': 0, 'agentId': 0, 'date': '2015-01-09'},
            {'saleId':10, 'propertyTypeId': 1, 'agentId': 0, 'date': '2015-01-10'},
            {'saleId':11, 'propertyTypeId': 2, 'agentId': 0, 'date': '2015-01-11'},
            {'saleId':12, 'propertyTypeId': 2, 'agentId': 0, 'date': '2015-01-12'},
            {'saleId':13, 'propertyTypeId': 1, 'agentId': 0, 'date': '2015-01-13'},
            {'saleId':14, 'propertyTypeId': 0, 'agentId': 0, 'date': '2015-01-15'},
            {'saleId':15, 'propertyTypeId': 2, 'agentId': 0, 'date': '2015-01-17'},
            {'saleId':16, 'propertyTypeId': 1, 'agentId': 1, 'date': '2015-01-01'},
            {'saleId':17, 'propertyTypeId': 1, 'agentId': 1, 'date': '2015-03-01'},
            {'saleId':18, 'propertyTypeId': 2, 'agentId': 1, 'date': '2015-03-01'},
            {'saleId':19, 'propertyTypeId': 0, 'agentId': 1, 'date': '2015-08-01'},
            {'saleId':20, 'propertyTypeId': 0, 'agentId': 2, 'date': '2015-02-01'},
            {'saleId':21, 'propertyTypeId': 0, 'agentId': 2, 'date': '2015-04-01'},
            {'saleId':22, 'propertyTypeId': 1, 'agentId': 2, 'date': '2015-05-01'},
            {'saleId':23, 'propertyTypeId': 2, 'agentId': 2, 'date': '2015-05-01'},
            {'saleId':24, 'propertyTypeId': 0, 'agentId': 2, 'date': '2015-05-01'},
            
        ]
        })});

module.exports = router;