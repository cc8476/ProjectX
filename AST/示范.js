const recast = require('recast')
const {
  variableDeclaration,
  variableDeclarator,
  functionExpression
} = recast.types.builders

const code = `let a =1`;

const ast = recast.parse(code)
const add = ast.program.body[0]

console.log(add.declarations[0])