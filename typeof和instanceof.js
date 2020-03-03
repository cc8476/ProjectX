/* typeof 一般只能返回如下几个结果："number"、"string"、"boolean"、"object"、"function" 和 "undefined"。

在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 “object”。这就需要用到instanceof来检测某个对象是不是另一个对象的实例
 */

typeof undefined;//=> undefined
typeof 'a';//=> string
typeof 1;//=> number
typeof true;//=> boolean
typeof {};//=> object
typeof [];//=> object
typeof function() {};//=> function
typeof null;//=> object


var obj = {}; obj instanceof Object; //=> true; 
var arr = []; arr instanceof Array; //=> true;