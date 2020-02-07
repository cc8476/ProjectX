/* 首先，假设表中元素是按升序排列，将表中间位置记录的关键字与查找关键字比较，如果两者相等，则查找成功；否则利用中间位置记录将表分成前、后两个子表，如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。重复以上过程，直到找到满足条件的记录，使查找成功，或直到子表不存在为止，此时查找不成功。 */

//Array.prototype.splice(start_position,number);
//从start_position返回number个值

let a=[-999999,-99999,-9999,-111,-98,-55,-33,1,2,3,4,6,8,9,11,12,14,99,1000,2000,3000,40000];
//let a=[-111,-98,-55,-33,1,2,3,4,6,8,9,11,12,14,99,1000];
//let a=[-12,14,99,1000];
let find =-9999;

search(a,find);

function search(arr,find) {
    let arr_length=arr.length;
    let len=Math.floor(arr_length/2);
    if(find == arr[len]) {
        return len;
    }
    else if (find < arr[len]) {
        let newArr= arr.splice(0,len);
        return search(newArr,find);
    }
    else {
        let newArr= arr.splice(len,arr_length-len);
        return search(newArr,find);
    }

}

