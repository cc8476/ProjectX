const recast = require("recast");

/* const code = [
    "function add(a, b) {",
    "  return a +",
    "    // Weird formatting, huh?",
    "    b;",
    "}"
  ].join("\n"); */

  const code =[
`function render () {
	return '<div>1</div>'
}`

  ];

  const ast = recast.parse(code);  //解析的用法
  const add  = ast.program.body[0]  //被解析内容对应的位置


  console.log(add)