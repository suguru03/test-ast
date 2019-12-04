const { Ast, hooks } = require('prettier-hook');

function parse(ast) {
  new Ast()
    .set('VariableDeclaration', (parent, key) => {
      const node = parent[key];
      node.kind = 'const';
    })
    .resolveAst(ast);
  return ast;
}

hooks.babylon.addHook(parse);
