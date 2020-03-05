function jsonp() {

    return new Promise((resolve,reject)=>{
        
        //创建一个回调函数
        var name = "cb"+Math.random();
        window[name] = function(e) {
            this.console.log("callback",e);
        }

        //创建一个script节点
        let scriptdom = document.createElement("script");
        scriptdom.src= "http://www.test.com/api?callback="+name;
        document.body.appendChild(scriptdom);

        
        //监听成功或失败
        scriptdom.onload = ()=>{
            console.log("onload")
            resolve("onload");
        }
        scriptdom.onerror = ()=>{
            console.log("onerror")
            reject("onerror");
        }
    })
}

jsonp().then(
    (data)=>{
        console.log("then data:"+data)
    }
).catch(
    (data)=>{
        console.log("catch data:"+data)
    }
)




    
