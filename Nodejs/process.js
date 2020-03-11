console.log(process.argv);
//在控制台输入 node process.js 1 2 3

/* 打印结果如下：
[
    '/usr/local/bin/node',
    '/Users/cc/work/Codes_Personal/ProjectX/Nodejs/process.js',
    '1',
    '2',
    '3'
  ] */

//console.log(process)


//进程常驻
process.stdin.on('data',
  (e)=>{
    if(e.toString().trim()=="exit") {
      console.log("退出！")
      process.exit();
    }
    //打印命令行输入
  }
)