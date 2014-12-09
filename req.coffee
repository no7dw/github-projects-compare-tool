request = require 'superagent'
#request = require 'request'
env = require('jsdom').env
url1="https://github.com/balderdashy/sails/"

getWatchStar = (url, callback) ->

	request.get(url  )
        .set('Referer',  url )
        .set('Accept-Encoding','gzip,deflate,sdch')
        .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36')
        .end (err, res) ->
            if (res?.status ==  404) || err || res.error
                console.log 'shit',res.status
                console.error "#{new Date()} [ERROR] #{url} err: " , err  ||  res.error 
                return callback (err || res.error)
            else
                html = res.text
                env html, (err, window) ->
                    err && console.log err
                    $ = require('jquery')(window)
                    
                    a = $('.social-count js-social-count')
                    console.log 'watch value:' ,a
                    callback null , a

getWatchStar url1, (err, doc)->
    if not err
        console.log 'success'
    process.exit 0

                    