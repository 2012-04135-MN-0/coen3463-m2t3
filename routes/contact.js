var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {title:'Contact'});
});

router.post('/send',function(req,res,next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'netshwlanshow@gmail.com',
            pass: 'spencer16'
        }
    });

    var mailOptions = {
        from: 'Big Mom',
        to: 'netshwlanshow@gmail.com',
        subject: 'Website Submission',
        text: 'You have a new request... Name: ' + req.body.name + 'Email: ' +req.body.email+ 'Service' + req.body.service + 'Message: '+ req.body.message,
        html: '<p>You have a new request..</p><ul><li>Name: '+ req.body.name +'</li><li>Email: '+ req.body.email +'</li><li>Service: '+ req.body.service +'</li><li>Message: '+ req.body.message+'</li></ul>'
        };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        } else{
            console.log('Message Sent: '+info.response);
            res.redirect('/');

        }
    });
});

module.exports = router;