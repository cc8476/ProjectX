var versions=['1.45.0','2.12.88','1.5.1','1.5.11','1.4.8'];
//sort内部的函数，只能识别number,return true/false 要替换成return 1/-1;

function check(arr1,arr2,order=0) {

    if(order==arr1.length) {
        return 1;
    }
    if(Number(arr1[order])  >  Number(arr2[order] ))  {
        return 1;
    }
    else if(Number(arr1[order])  <  Number(arr2[order] )) {
        return -1;
    }
    else if(Number(arr1[order])  ==  Number(arr2[order] )){
        return check(arr1,arr2,order+1);
    }
}


//拿2个版本号进行比较
console.log(check(versions[2],versions[1]));

//排序
versions.sort(
    (next,prev)=>{
        let nextS=next.split(".");
        let prevP=prev.split(".");

       return check(nextS,prevP,0);
    }
)

console.log(versions);

