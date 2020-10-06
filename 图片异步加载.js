let run  =function(url) {

    return new Promise(
        (resolve,reject)=>{
            let img =new Image();
            img.onload = function() {
                resolve(img)
            }
            img.onerror = function() {
                reject(new Error("abc"))
            }
    
            img.src= url;
         }
    )

}

run("www.baidu.com").catch((e)=>{
    console.log(e);
})