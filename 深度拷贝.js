let target = {
    webName: "蚂蚁部落"
}
let source = {
    url: "www.softwhy.com",
    num: {
        x: 1,
        y: 2
    },
    arr:[1,2],
    func:function() {}
}

function copy(source,type) {

    var result;
    if(type=='array') {
        result =[];
    }
    else {
        result ={};
    }

    for(var k in source) {

        if(source[k] instanceof Array) {
            result[k] = copy(source[k],"array");
        }
        else if(source[k] instanceof Object) {
            result[k] = copy(source[k],"object");
        }
        else {
            result[k]=source[k]
        };
    }
    return result;
}


console.log(copy(source),Object);


//关键点
//1.要Array和Object的识别，typeof  xx不能识别，只能用xx instanceof 来识别
//2.用for in 赋值,xx[key] = value ;要设置xx=[]或者xx={}