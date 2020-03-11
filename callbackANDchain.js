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