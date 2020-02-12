/**
 * 
 方法1：
    用sort进行排序，再用一个for循环来选出相邻key不同的集合
方法2：
    直接用上new set (es6 新增类型):
        新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

    
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

 * 
 * 
 */

let arr = [1,111,111,2,33,24,55,6,66,66];



function sort1(arr) {

    arr.sort(
        (a,b)=>{
            return a-b;
        }
    )
    let result =[];
    let len =arr.length;

    for (let i = 1;  i < len; i++) {
        if(arr[i]!=arr[i-1]) {
            result.push(arr[i-1]);
        }
    }
    return result; 
}


function sort1(arr) {

    return [... new Set(arr)];
}


console.log(sort1(arr));

