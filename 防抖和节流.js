

//1.防抖就是一直延迟，直到最后一次没有被中断，那么执行一次 
//2.节流就是，每个周期内只执行一次函数


//xxx =setTimeout(...)
//xxx= setInterval(...)
//在浏览器下，xxx是个number,在node 下，xxx是个Time对象
//所以在clearInterval或者clearTimeout后，要设置xxx= 0;

this.mainTime=0;

this.main = setInterval(
    ()=>{
        if(this.mainTime>100) {
            clearInterval(this.main);
            this.main = 0;
        }
        this.mainTime++
        //callFangdou();
        callJieliu();
    },50
);



this.time =0;


let callFangdou=()=>{

    clearTimeout(this.time);
    this.time = 0;
    this.time = setTimeout(
        ()=>{
            console.log("最后一次输出结果");
        },300
    );
}





this.time =0;

let  callJieliu=()=> {

    //console.log("this.time",this.time);
        
    if(this.time==0) {
        this.time = setTimeout(
            ()=>{
                console.log("每个周期内输出结果");
                clearTimeout(this.time);
                this.time = 0 ;
            },1000
        );
    }


}