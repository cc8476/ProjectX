//闭包：函数内部的函数
//利用闭包：获取函数的内部变量
//模拟对象机制，也就是在函数调用完成后，内部属性仍然在内存中

var person = function(){    
    //变量作用域为函数内部，外部无法访问    
    var name = "default";       
       
    return {    
       getName : function(){    
           return name;    
       },    
       setName : function(newName){    
           name = newName;    
       }    
    }    
}();    
     
console.log(person.getName());  // default   