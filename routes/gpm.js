var express = require('express');
var router = express.Router();
var gpm = require('../controller/req');



/* GET users listing. */
router.get('/', function(req, res) {
  var url1,url2;
// url1 = "https://github.com/balderdashy/sails/";
// url2 = "https://github.com/strongloop/loopback";
  console.log(req.query);
  url1=req.query.url1;
  url2=req.query.url2;
  urllist = [url1,url2];
  
  // var data = 
  // {
  //   "url":["https://github.com/strongloop/loopback","https://github.com/balderdashy/sails/"],
  //   "Star":[2710,8604],
  //   "Fork":[237,951]
  // };  
  // return res.json(data);
  gpm(urllist, function(err, result) {
  	res.json(result);
  });  
});

module.exports = router;
