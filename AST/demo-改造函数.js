// builder1.js
const recast = require('recast')
const {
  variableDeclaration,
  variableDeclarator,
  functionExpression
} = recast.types.builders

const code = `let a = 1;`

const ast = recast.parse(code)
const add = ast.program.body[0]



ast.program.body[0] = variableDeclaration('const', [
  variableDeclarator(add.declarations[0].id,add.declarations[0].init)])

const output = recast.print(ast).code

console.log(output)