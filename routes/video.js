var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"videoedit",
            "description":"Finalizing the videos",
            "link": '/video',
            
        },
        
    ]
  };
  res.render('video', bodyData);
});

module.exports = router;
