var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( {'agents':[
    {'name': 'steve', 'agentId': 0},
    {'name': 'bob', 'agentId': 1},
    {'name': 'jack', 'agentId': 2},
]
});
});

module.exports = router;