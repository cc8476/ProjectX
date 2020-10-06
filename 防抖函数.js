function debounce(fn,delay) {
    delay = delay || 50;

    let timer = null 
    return function () {
        let self = this
        clearTimeout(timer)
        timer = setTimeout(
            //fn.bind(self,arguments),delay
            fn,delay
        )
    }
}

let func = function () {
    console.log("hjjhaha")
}

let  func2 = debounce(func,1000);


func2()
setTimeout(() => {
    func2()
}, 500)
