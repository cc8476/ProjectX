let obj ={1:222, 2:123, 5:888};
//[222, 123, null, null, 888, null, null, null, null, null, null, null]。

let array =new Array(12);
for (let index = 0; index < array.length; index++) {
    
    if(obj[index]) {
        array[index] = obj[index]
    }
    else {
        array[index] =null
    }
}

console.log(array)
