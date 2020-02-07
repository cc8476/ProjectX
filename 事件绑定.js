// 方法一，只可绑定，不可传参
Function.prototype.my_bind = function(context){
  var self = this;
  return function(){
    self.apply(context,arguments);
  }
}


var a ={

  name:111,
  b: function ()  {

    console.log(this.name);
  },

  c: function() {
    var func = function() {
      console.log(this.name);
    };

    func.bind(this)();
    
  }
};



a();

a.apply( obj ,arguments);


Function.prototype.ccbind =function (obj) {

    var self =this;
    return function() {
        self.apply(context,arguments);
    }
}

a.ccbind(obj)()  ==>

function (context) {
  return function () {
    a.apply(context,argument);
  }
};




