setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
})

console.log(2)

//为什么4，3要慢？
/* promise是微任务


宏任务：包括整体代码 script，setTimeout，setIntervcal
微任务：Promise，process.nextTick

 */







console.log('script start');

setTimeout(function() {

    console.log('setTimeout');

}, 0);

Promise.resolve().then(function() {    

console.log('promise1');

}).then(function() {    

console.log('promise2');});

console.log('script end');


//script start
//script end

//setTimeout
//promise1
//promise2



