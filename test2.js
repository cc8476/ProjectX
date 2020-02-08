var arr=[1,5,1,22,2];

var result= arr.sort(
    (a,b)=>{
        if(a>b) {
            return -1;
        }
        else {
            return 1;
        }
    }
)

console.log(result);