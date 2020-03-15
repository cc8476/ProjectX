//a等b的回掉，b等c的回调 ：分别写出cb的方式和用链式的方式
function a(cb) {
    b(
        (data) => {
            cb(data)
        }
    )
}

function b(cb) {
    cb("b的回调");
}

a(
    (data) => {
        console.log(data)
    }
)



//链式调用，使用promise
//promise 内，即使写了resolve()和reject()2个状态，只会认定第一个执行的状态


let p = new Promise(
  (r,rr)=>{
    rr();
  }
)

p.then(
  (e)=>{
    return e
    //或throw new Error('1111')
  }
);
/* 
执行then和catch 会返回一个新的promise,该promise的状态由then和catch的回调函数执行结果决定：
1.return xxxx 则状态是resolve
2.throw new Error,则状态是reject
如果then或者catch中返回了一个Promise,该promise会和then或者catch return 的Promise状态保持一致
 */
function interview(num) {

    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (Math.random() > 0.4) {
                        console.log("num:"+num)
                        resolve("num:"+num);
                    } else {
                        reject("error:"+num);
                    }
                }
            )
        }
    )
}


interview(0).then(
    () => {
        return interview(1)
    }
).then(
    () => {
        return interview(2)
    }
).catch(
    (data)=>{
        console.log(data)
    }
)
