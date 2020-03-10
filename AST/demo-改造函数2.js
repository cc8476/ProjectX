const recast = require('recast')
const {
  variableDeclaration,
  variableDeclarator,
  arrowFunctionExpression,
  blockStatement
} = recast.types.builders

const code = `function add (a, b) {
  return a + b
}`

const ast = recast.parse(code)
const add = ast.program.body[0]


const arrow = arrowFunctionExpression([], blockStatement([]))



ast.program.body[0] = variableDeclaration('const', [
  variableDeclarator(add.id, arrow)
])

const output = recast.print(ast).code

console.log(output)
