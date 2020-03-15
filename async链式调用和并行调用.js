function interview(num) {

    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (Math.random() > 0.4) {
                        console.log("num:"+num)
                        resolve("num:"+num);
                    } else {
                        reject("error:"+num);
                    }
                }
            )
        }
    )
}



async function chains () {
    try {
        await interview(0);
        await interview(1);
        await interview(2);

        console.log("完成")
    } catch (error) {
        console.log(error);
    }
}


//chains();


async function gather () {
    try {

        await Promise.all([interview(0),interview(1),interview(2)])

        console.log("完成")
    } catch (error) {
        console.log(error);
    }
}

gather()