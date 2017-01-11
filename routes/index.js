var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"photoedit",
            "description":"adding effects to photos",
            "link": '/photo'
            
        },
        {
            "name":"videoedit",
            "description":"finalizing videos",
            "link": '/video'
            
        },
        {
            "name":"audioedit",
            "description":"removing noise",
            "link": '/audio'
            
        },
        
    ]
  };
  res.render('index', bodyData);
});

module.exports = router;
