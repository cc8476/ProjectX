
/**
 * 1.express的简单介绍
 * 2.利用next()实现中间件的能力
 * 
 */

const express=require('express')
const app =express();
const fs =require('fs');

/* app.use(
    (req,res)=>{
        console.log("use")

    }
); */

app.get('./favicon.ico',
    (req,res)=>{
        res.writeHead(200);
        res.end();
        return;
    }
)

app.get('/',
    (req,res,next)=>{
        console.log("////")
        res.writeHead(200);
        fs.createReadStream(__dirname+'/html-temp.html')
        .pipe(res);
        res.abc=1;
        next();
        
    },
    (req,res,next)=>{
        console.log("next 中间件",res.abc);
        res.abc=2
        next();
    },
    (req,res,next)=>{
        console.log("next 中间件",res.abc);
    }

)


app.listen(3001);