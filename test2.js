
let iqiyi ={
    share:function(shareContent) {
        console.log("shareContent",shareContent)
    }
}
let isInited = true;
let shareConfig ={}

function checkLoad(callback, ...args) {

    if (isInited) {
        console.log("callback",callback,...args)
        callback(...args)
    }

}



checkLoad(iqiyi.share, shareConfig)