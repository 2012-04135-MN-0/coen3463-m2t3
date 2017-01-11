var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"photoedit",
            "description":"adding effects to the pictures",
            "link": '/photo',
            
        },
        
    ]
  };
  res.render('photo', bodyData);
});

module.exports = router;
