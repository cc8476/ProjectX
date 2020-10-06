//举个例子，有 8 张图片 url，你需要并发去获取它，并且任何时刻同时请求的数量不超过 3 个。也就是说第 4 张图片一定是等前面那一批有一个请求完毕了才能开始，以此类推。



function load() {

    let now = 0;
    let done =0;
    return function abc(url) {

        if (now >= 3) {
            setTimeout(() => {
                abc(url)
            }, 500)

            return;
        } else {
            now++;
        }



        return new Promise(
            (resolve, reject) => {

                setTimeout(() => {
                    now--;
                    console.log("完成一个")
                    done++
                    resolve(done)
                }, 1000)


            }
        )

    }


}


let imgload = load();

/* imgload();
imgload();
imgload();
imgload();
imgload();
imgload();
imgload(); */