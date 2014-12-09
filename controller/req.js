var async, env, getWatchStar, request, url1, url2, urllist;

request = require('superagent');

async = require('async');

env = require('jsdom').env;

getWatchStar = function(url, callback) {
  return request.get(url).set('Referer', url).set('Accept-Encoding', 'gzip,deflate,sdch').set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36').end(function(err, res) {
    var html;
    if (((res != null ? res.status : void 0) === 404) || err || res.error) {
      console.error("" + (new Date()) + " [ERROR] " + url + " err: ", err || res.error);
      return callback(err || res.error);
    } else {
      html = res.text;
      return env(html, function(err, window) {
        var $, ret;
        err && console.error(err);
        $ = require('jquery')(window);
        ret = {
          'url': url,
          'watch': parseInt($(".social-count.js-social-count")[0].childNodes[0].nodeValue.replace(",", ""))
        };
        return callback(null, ret);
      });
    }
  });
};

compare = function(urllist , cb ) {
  var result_array = [];
  async.forEach(urllist, function(url, callback) {
    return getWatchStar(url, function(err, doc) {
      console.log(doc);
      result_array.push(doc);
      return callback(err, doc);
    });
  }, function(err) {
    cb(err,result_array);
  });
};

module.exports = compare;