function hasReach(num,total,time) {
    if(num<=0) {
        console.log("跑不动啦！！");
        return;
    }
    if(num>=total) {
        console.log("第"+time+"次后终于到啦");
        return;
    }
    else {
        console.log("青蛙跑第"+time+"次"); 
        return hasReach(num-1/8, total-num,time+1);
    }
}

hasReach(2+1/4,21,1);