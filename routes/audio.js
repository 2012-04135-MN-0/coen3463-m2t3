var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"audioedit",
            "description":"removing noise",
            "link": '/audio',
            
        },
        
    ]
  };
  res.render('audio', bodyData);
});

module.exports = router;
