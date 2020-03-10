const arr =[-100,29,1,2,6,8,70,19,100];
const key = 0;

//找到最接近的那个数字，如果有多个，返回最大的那个数字
function find(arr,key) {

    let arr2= [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i]-key);
    }
    
    arr2.sort(
        (a,b)=>{
            if(Math.abs(a) == Math.abs(b)) {
                return 1;
            }
            else {
                return Math.abs(a) - Math.abs(b)
            }
        }
    )
    return  arr2.pop()+key;
}

let result = find(arr,key);

console.log(result);