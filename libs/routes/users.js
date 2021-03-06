var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';

var db = require(libs + 'db/mongoose');

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

router.get('/info', function(req, res) {
        //this example simply returns the scope in the response.
        res.json({
        	user_id: req.user.userId,
        	name: req.user.username
        });
    }
);

module.exports = router;
