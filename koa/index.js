/**
 * koa 相比express,中间件的优化是个特点
 * koa本身不提供路由功能，都是通过中间件来处理
 * 
 * koa，中间件的例子:体会一下什么是洋葱模型
 */
const Koa = require('koa');
const fs =require('fs');
const mount =require('koa-mount')  //用来实现路由功能
const app = new Koa();


app.use(async (ctx,next)=>{
    console.log("1");
    await next();
    console.log("4")
  })
  app.use(async (ctx,next)=>{
    console.log("2");
    await next()
    console.log("3")
  })


app.use(
    mount('/favicon.ico',
        ctx=>{
            console.log('favicion')
            ctx.status =200;
        }
    )
)

app.use(
    mount('/',
        ctx=>{
            console.log('/')
            ctx.body =fs.readFileSync(__dirname+'/html-temp.html','utf-8');
        }
    )
)



app.listen(3000);