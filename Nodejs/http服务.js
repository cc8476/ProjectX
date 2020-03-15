const http = require('http')
const fs =require('fs');

const url =  require('url')
const querystring = require('querystring')


http.createServer(
    (req,res)=>{



        if(req.url=='/favicon.ico'){
            res.writeHead(200);
            res.end();
            return;
        }

        const parseUrl = url.parse(req.url);

        console.log('路径:',parseUrl.pathname);
        console.log("url参数:",querystring.parse(parseUrl.query));
        console.log('读取action参数:',querystring.parse(parseUrl.query).action);
        //示例：http://127.0.0.1:3000/?action=abc

        console.log(req.url)
        res.writeHead(200);
        fs.createReadStream(__dirname+'/html-temp.html')
        .pipe(res);
    }
).listen(3000)

//打开网址：http://127.0.0.1:3000/