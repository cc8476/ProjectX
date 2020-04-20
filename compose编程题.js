const add = num => num + 10
const multiply = num => num * 2
const foo = compose(multiply, add) 

console.log(foo(5))

//思路是什么：
//1. compose必须是返回一个函数，且函数参数是一个num
//从结果看，是依次执行add和multiply,所以必须用到...rest的循环，把结果进行迭代



function compose(...rest) {
    
    return function(num) {
        let output =num;
        for (let i = rest.length-1; i >= 0; i--) {
            const func = rest[i];
            output = func(output)
        }   
        return output 
    }
}

