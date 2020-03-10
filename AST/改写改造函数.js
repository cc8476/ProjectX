// builder1.js
const recast = require('recast')
const {
  variableDeclaration,
  variableDeclarator,
  functionExpression
} = recast.types.builders

const code = `const a = 1;`

const ast = recast.parse(code)
const add = ast.program.body[0]

ast.program.body[0] = variableDeclaration('let', [
  variableDeclarator(add.id, add.init)
])

const output = recast.print(ast).code

console.log(output)