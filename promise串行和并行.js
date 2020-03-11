//new Promise()...  就直接执行了
//await 后面的promise不是返回的resolve,那么就需要
/**
 * await new Promise(....).catch(
    (e)=>{
        console.log("catch error")
    }
*/

const promise1 = ()=>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("111")
        resolve(1)
    },1111)
    })
}
const promise2 = ()=>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("222")
        reject(2)
    },2222)
    })
}

const promise3 = ()=>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("333")
        resolve(3)
    },3333)
    })
}


 var arr=[promise1,promise2,promise3];


var fn=async function(arr){
    var result;
    for(let i=0,len=arr.length;i<len;i++){
        result=await arr[i]().catch(
            (e)=>{
                console.log("catch error")
                arr= []
            }
        )

    }

    return result;


 }    
  let r= fn(arr).then(
     ()=>{
         console.log("done!!!")
     }
 ).catch(
    ()=>{
        console.log("catch")
    }
) 


//并行，比较简单
//并行，比较简单
//并行，比较简单
var arr=[promise1(),promise2(),promise3()];
Promise.all(arr).then(
    ()=>{
        console.log('done')
    }
).catch(
    ()=>{
        console.log("error")
    }
)
