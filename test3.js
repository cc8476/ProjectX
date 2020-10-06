// 普通的add函数
function add(x, y) {
    return x + y
}


function curryingAdd(x) {

    return function(y) {
        return x+y
    }
}


let a =add(1, 2)           // 3
let y = curryingAdd(1)(2)   // 3

console.log(y);