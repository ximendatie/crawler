const express = require('express')  //  服务器
const superagent= require('superagent');  //  爬网页
const cheerio = require('cheerio'); //  解析


const app = express()
const getContent = (url)=>{
  superagent.get(url).end((err,res)=>{
    if(err){
      return '爬取失败'
    }
    else{
      return res
    }
  })
}
const parseContent = (content)=>{
  let $ = cheerio.load(content.text)
  
}

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Your App is running at http://%s:%s', host, port);
});

app.get('/', async (req, res)=> {
  let content = await getContent('http://www.qq.com')
  let result = parseContent(content)
  res.send(result);
});