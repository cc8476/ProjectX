var arr1 = [1,2,3,4,5];
var arr2 = [3,4,5,6,7];


//filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

//求交集
let result = arr2.filter(
    (v)=>{
        if(arr1.indexOf(v)>-1) {
            return v
        }
    }
)
//console.log(result);



//1.forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
//求差集


var arr01 = [1,2,3,4,5];
var arr02 = [3,4,5,6,7];

let result1 = [...arr01];//这是浅拷贝
let result2 = [...arr02];//这是浅拷贝

arr02.forEach(
    (v,key)=>{
       if(arr01.indexOf(v) >-1) {
           let key1= result1.indexOf(v);
           let key2= result2.indexOf(v);
            result1.splice(key1,1);
            result2.splice(key2,1);
       }
    }
)
console.log([...result1,...result2])