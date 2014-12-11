var express = require('express');
var router = express.Router();
var gpm = require('../controller/req');

url1 = "https://github.com/balderdashy/sails/";
url2 = "https://github.com/strongloop/loopback";

urllist = [url1,url2];

/* GET users listing. */
router.get('/', function(req, res) {
  var data = [{"url":"https://github.com/strongloop/loopback","Star":2710,"Fork":237},{"url":"https://github.com/balderdashy/sails/","Star":8604,"Fork":951}];
  // return res.json(data);
  gpm(urllist, function(err, result) {
  	res.json(result);
  });  
});

module.exports = router;
