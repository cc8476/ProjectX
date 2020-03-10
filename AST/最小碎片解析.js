let a = 123

{
    "type":,
    "declarations":,  //表示声明的多个描述
    "kind":"let",   //表示是什么类型的声明  
    "loc":,

}



"declarations": [
    {
      "type": "VariableDeclarator",
      "start": 4,
      "end": 10,
      "id": {   //id 表示变量名称节点
        "type": "Identifier",  //标识符
        "start": 4,
        "end": 5,
        "name": "a"  //这是变量名称
      },
      "init": {  //init 表示初始值的表达式
        "type": "Literal",  //字面量
        "start": 7,
        "end": 10,
        "value": 123,
        "raw": "123"
      }
    }
  ],



  let a = 3+4

  "init": {
    "type": "BinaryExpression",  //二元运算表达式
    "start": 8,
    "end": 11,
    "left": {
      "type": "Literal",
      "start": 8,
      "end": 9,
      "value": 3,
      "raw": "3"
    },
    "operator": "+",  //操作符
    "right": {
      "type": "Literal",
      "start": 10,
      "end": 11,
      "value": 4,
      "raw": "4"
    }
  }


  let a ;

  "declarations": [
    {
      "type": "VariableDeclarator",
      "start": 4,
      "end": 5,
      "id": {
        "type": "Identifier",
        "start": 4,
        "end": 5,
        "name": "a"
      },
      "init": null  没有初始化
    }
  ],



  1+1
  { 
    "type": "ExpressionStatement",  //表达式语句
    "start": 1,
    "end": 4,
    "expression": {
      "type": "BinaryExpression",  二元运算表达式
      "start": 1,
      "end": 4,
      "left": {
        "type": "Literal",
        "start": 1,
        "end": 2,
        "value": 1,
        "raw": "1"
      },
      "operator": "+",
      "right": {
        "type": "Literal",
        "start": 3,
        "end": 4,
        "value": 1,
        "raw": "1"
      }
    }
  }


  a = 1+1

  {
    "type": "ExpressionStatement",
    "start": 0,
    "end": 7,
    "expression": {    //赋值表达式节点
      "type": "AssignmentExpression",
      "start": 0,
      "end": 7,
      "operator": "=",
      "left": {
        "type": "Identifier",
        "start": 0,
        "end": 1,
        "name": "a"
      },
      "right": {
        "type": "BinaryExpression",
        "start": 4,
        "end": 7,
        "left": {
          "type": "Literal",
          "start": 4,
          "end": 5,
          "value": 1,
          "raw": "1"
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 6,
          "end": 7,
          "value": 1,
          "raw": "1"
        }
      }
    }
  }




  let a = {vvv:1}

  "init": {
    "type": "ObjectExpression",  对象表达式节点
    "start": 8,
    "end": 15,
    "properties": [  property 属性是一个数组，表示对象的每一个键值对，每一个元素都是一个属性节点。
      {
        "type": "Property",
        "start": 9,
        "end": 14,
        "method": false,
        "shorthand": false,
        "computed": false,
        "key": {
          "type": "Identifier",
          "start": 9,
          "end": 12,
          "name": "vvv"
        },
        "value": {
          "type": "Literal",
          "start": 13,
          "end": 14,
          "value": 1,
          "raw": "1"
        },
        "kind": "init"
      }
    ]
  }


  this.state
  {
    "type": "ExpressionStatement", 还是表达式
    "start": 0,
    "end": 10,
    "expression": {
      "type": "MemberExpression",  成员表达式
      "start": 0,
      "end": 10,
      "object": {
        "type": "ThisExpression",  this表达式
        "start": 0,
        "end": 4
      },
      "property": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "state"
      },
      "computed": false
    }
  }

  new Date()

  "expression": {
    "type": "NewExpression",
    "start": 0,
    "end": 10,
    "callee": {
        callee 属性是一个表达式节点，表示函数，arguments 是一个数组，元素是表达式节点，表示函数参数列表
      "type": "Identifier",
      "start": 4,
      "end": 8,
      "name": "Date"
    },
    "arguments": []
  }

箭头函数：
i=>i++

"expression": {
    "type": "ArrowFunctionExpression",  箭头函数表达式
    "start": 0,
    "end": 8,
    "id": null,
    "expression": true,
    "generator": false,
    "async": false,
    "params": [
      {
        "type": "Identifier",
        "start": 0,
        "end": 1,
        "name": "i"
      }
    ],
    "body": {
      "type": "UpdateExpression",  update 运算表达式节点，即 ++/--
      "start": 5,
      "end": 8,
      "operator": "++",
      "prefix": false,
      "argument": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "i"
      }
    }
  }



  function Hello(name = 'Lily'){
    
}

{
    "type": "FunctionDeclaration",
    "start": 0,
    "end": 37,
    "id": {
      "type": "Identifier",
      "start": 9,
      "end": 14,
      "name": "Hello"
    },
    "expression": false,
    "generator": false,
    "async": false,
    "params": [
      {
        "type": "AssignmentPattern",
        "start": 15,
        "end": 28,
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 19,
          "name": "name"
        },
        "right": {
          "type": "Literal",
          "start": 22,
          "end": 28,
          "value": "Lily",
          "raw": "'Lily'"
        }
      }
    ],
    "body": {
      "type": "BlockStatement",
      "start": 29,
      "end": 37,
      "body": []
    }
  }