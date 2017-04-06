var express = require('express');
var passport = require('passport');
var https = require('https');
var wxDataDecoder = require('../utils/wxDataDencrypt');

var router = express.Router();
var libs = process.cwd() + '/libs/';
var db = require(libs + 'db/mongoose');

const appId = 'wx2030e69e399cb0c6';
const wxsecret = 'e050eee9b15a0119465bdf8f3f8ea547';
const grant_type = 'authorization_code';

var encryptedData, sessionkey, iv, wxcode;

// router.get('/info', passport.authenticate('bearer', { session: false }),
//     function(req, res) {
//         //this example simply returns the scope in the response.
//         res.json({
//         	user_id: req.user.userId,
//         	name: req.user.username,
//         	scope: req.authInfo.scope
//         });
//     }
// );

router.post('/info', function(req, res) {
        //this example simply returns the scope in the response.
    /*
        res.json({
        	user_id: req.user.userId,
        	name: req.user.username
        });
    */
    encryptedData = req.data.encryptedData;
    iv = res.data.iv;
    wxcode = res.data.wxcode;

    https.get('https://api.weixin.qq.com/sns/jscode2session?'
        +'appid=' + appId
        +'&secret=' + wxsecret
        +'&js_code=' + wxcode
        +'&grant_type=authorization_code', function(res) {

        console.log('状态码：', res.statusCode);
        console.log('请求头：', res.headers);

        res.on('data', function(d) {
            // process.stdout.write(d);
            console.log(data)
        });


    }).on('error', function(e){
        console.error(e);
    });

});


router.post('/add', function (req, res) {


});

function sessionReq(code, url) {

}


module.exports = router;
