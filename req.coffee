request = require 'superagent'
async = require 'async'#request = require 'request'
env = require('jsdom').env
url1="https://github.com/balderdashy/sails/"
url2="https://github.com/strongloop/loopback"

getWatchStar = (url, callback) ->

	request.get(url  )
        .set('Referer',  url )
        .set('Accept-Encoding','gzip,deflate,sdch')
        .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36')
        .end (err, res) ->
            if (res?.status ==  404) || err || res.error                
                console.error "#{new Date()} [ERROR] #{url} err: " , err  ||  res.error 
                return callback (err || res.error)
            else
                html = res.text
                env html, (err, window) ->
                    err && console.error err
                    $ = require('jquery')(window)                    
                    
                
                    ret ={
                        'url' : url
                        'watch':parseInt $(".social-count.js-social-count")[0].childNodes[0].nodeValue.replace(",",""),
                        #'star':parseInt $(".social-count.js-social-count")[1].childNodes[0].nodeValue.replace(",",""),
                    }
                    callback null , ret
urllist = [url1]


async.forEach urllist,  (url, callback) ->
    getWatchStar url, (err, doc)->
        console.log doc
        callback err, doc
, (err) ->
    process.exit 0


                    