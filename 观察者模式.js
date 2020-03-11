//观察者模式例子如下：

class Subject {

    constructor() {
        this.observers= []
    }

    add(observer) {
        this.observers.push(observer)
    }

    remove(observer) {
        let index=  this.observers.indexOf(observer);
        if(index>-1) {
            this.observers.splice(index,1);
        }
    }

    notify(data) {
        for (let i = 0; i < array.length; i++) {
            const observer = array[i];
            observer.update(data);
        }
    }
}

class Observer {

    update(data) {
        console.log("do something")
    }

}


/**
 * 
 * 发布--订阅模式,就是一方发送事件，一方监听事件，双方是解耦的
 * 
 * 
 * 观察者模式，业务逻辑更加紧密，相比发布--订阅模式而言；
 * 
 * 
 */
