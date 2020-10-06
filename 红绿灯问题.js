//红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：

function red() {
    console.log(new Date().getSeconds(),'red');
}
function green() {
    console.log(new Date().getSeconds(),'green');
}
function yellow() {
    console.log(new Date().getSeconds(),'yellow');
}


function pmise(func,delay)  {
   return  new Promise(
        
        (resolve)=>{
            setTimeout(() => {
                func()
                resolve("func1  done....")
            }, delay)
            
        }
        
    )
}
function run (red,green,yellow) {
    pmise(red,1000).then((resolveData)=>{
        return pmise(green,2000)
    }).then((resolveData)=>{
        return pmise(yellow,3000)
    }).then(()=>{
        run(red,green,yellow)
    })
}


run(red,green,yellow)