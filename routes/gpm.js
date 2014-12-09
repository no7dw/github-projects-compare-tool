var express = require('express');
var router = express.Router();
var gpm = require('../controller/req');

url1 = "https://github.com/balderdashy/sails/";
url2 = "https://github.com/strongloop/loopback";

urllist = [url1,url2];

/* GET users listing. */
router.get('/', function(req, res) {
  gpm(urllist, function(err, result) {
  	res.json(result);

  });
  // res.send('respond with a resource');
});

module.exports = router;
