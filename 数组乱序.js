let arr = [1,2,3,4,5,6,7,8,9,10];
var arr2=changeOrder(arr);
function changeOrder(arr) {

    let len=arr.length;
    let copyarr =[...arr];
    let result =[];
    for (let i = 0; i < len; i++) {
        let order = Math.floor(Math.random()*(len - i));
        result.push(copyarr[order]);
        copyarr.splice(order,1);
    }
    return result;

}   
