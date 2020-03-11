const EventEmitter = require('events').EventEmitter;

/*
* Created by joechen  2020-03-10 22:33
*/
class MyClass extends EventEmitter{
    constructor(prop) {
        super();
    }

    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }

    //静态方法
    static classMethod() {
        return 'hello';
    }
}
