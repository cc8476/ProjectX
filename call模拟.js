Function.prototype.call2 = function (context,...rest) {
    var context = context || window; //当context不传入的时候，context 就是window
    context.fn = this;//this就是调用者


    let arr = rest;

    console.log("arr",arr)
    let params="";
    arr.map(
        (v,i)=>{
            if(i==arr.length-1) {
                params+= "'"+v+"'";
            }
            else {
                params+= "'"+v+"',";
            }
        }
    )
    var result = eval('context.fn('+ params  +')');
    delete context.fn
    return result;
}


var obj={value:5}

function bar(a,b,c) {
    console.log(this.value,a,b,c)
}

bar.call2(obj,"a","b","c")
//等同于
bar.call(obj,"a","b","c")


