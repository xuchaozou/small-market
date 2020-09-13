var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
let homePath = path.resolve(process.cwd() , './public/home/')
let serverUrl = 'http://localhost:3000'

/* GET home page. */
let json
router.get('/', (req, res, next) => {
  if(req.path.indexOf('favicon.com')>-1) return res.send()
  else next()
})

router.get('/multidata', function(req, res) {
  fs.readFile(path.resolve(homePath, 'index.json'), 'utf8', (err, data) => {
    if(err){
      json = {
        isSuccess : false,
        message : '服务返回数据错误'
      }
    }else{
      let jsonData = JSON.parse(data)
      let banners = jsonData.banners
      for(let banner of banners){
        banner.img = serverUrl + banner.img
        console.log(banner)
      }
      json = {
        isSuccess : true,
        message : '接受服务端数据成功',
        data :  jsonData
      }
    } 
    res.json(json)
  })
});

module.exports = router;
