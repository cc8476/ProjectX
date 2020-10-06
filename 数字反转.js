/**
 * 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
 * 
 * 
 */


 let num =912735471;

 console.log(reverse(num))

 function reverse(num) {

    let result ='';

    let arr = num.toString().split('');

    function check(arr) {
        
        if(arr.length==1) {
            result +=arr[0].toString();
        }
        else {
            let lastNum = arr[arr.length-1]
            result +=lastNum.toString();
            arr.length = arr.length -1;

            check(arr)

        }
    }
    check(arr)
    return result
    
 }